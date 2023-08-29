
export declare global {
  import { IStorageCookie } from 'types/storage-cookie'
  export interface Window {
    storageCookie: IStorageCookie
  }
  export interface Document {
    __defineGetter__: any
    __defineSetter__: any
  }
}
