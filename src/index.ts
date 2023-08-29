import { ICookieData, ICookieLibrary, IStorageCookie } from "types/storage-cookie"

const STORAGE_NAME = 'site-cookies'

function StorageCookie () : IStorageCookie {
  const cookies: ICookieLibrary = {}

  // Load Initial Cookies
  const storage = localStorage.getItem(STORAGE_NAME)
  if (storage) {
    Object.assign(cookies, JSON.parse(storage))
  }

  const save = () => {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(cookies))
  }

  const get = (name: string): ICookieData | null => {
    const cookie = cookies[name]
    if (!cookie) return null

    const expires = new Date(cookie.expires)

    if (expires && expires.getTime() < Date.now()) {
      delete cookies[name]
      save()
      return null
    }

    return cookie
  }
  const getValue = (name: string): string | null => {
    const cookie = get(name)
    return cookie ? cookie.value : null
  }

  const set = (name: string, data: ICookieData) => {
    cookies[name] = data
    save()
  }

  const toString = () => {
    const values = []

    for (const name of Object.keys(cookies)) {
      const cookie = get(name)
      if (!cookie) continue

      values.push(`${name}=${cookie.value}`)
    }
    
    return values.join('; ')
  }

  const setString = (cookieString: string) => {
    const cookieParts = cookieString.split(';');
    const cookieValues: Partial<ICookieData> = {};
    
    const firstPart = cookieParts.shift()

    if (!firstPart) return

    const [name, value] = firstPart.trim().split('=');

    if (!name || !value) return
    cookieValues.value = value
    
    for (const part of cookieParts) {
      const [key, value] = part.trim().split('=');
      if (key && value) {
        (cookieValues as any)[key] = value;
      }
    }

    set(name, cookieValues as ICookieData)
  }

  return {
    get,
    getValue,
    set,
    setString,
    toString,
  }
}

window.storageCookie = StorageCookie()
Object.defineProperty(document, 'cookie', {
  get: function () {
    return window.storageCookie.toString()
  },
  set: function (val: string) {
    window.storageCookie.setString(val)
    return false
  },
  configurable: true,
})