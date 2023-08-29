declare module 'types/storage-cookie' {
  export interface IStorageCookie {
    get: (name: string) => ICookieData | null
    getValue: (name: string) => string | null
    set: (name: string, data: ICookieData) => void
    toString: () => string
    setString: (value: string) => void
  }

  export interface ICookieData {
    value: string
    expires?: string
    domain?: string
    SameSite?: string
    path?: string
  }

  export type ICookieLibrary = Record<string, ICookieData>
}
