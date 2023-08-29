import { IStorageCookie } from "types/storage-cookie"

export function saveDefaults(storage: IStorageCookie) {
  const cookies = document.cookie.split(';')
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=')
    if (!name || !value) continue
    storage.set(name, { value })
  }
}