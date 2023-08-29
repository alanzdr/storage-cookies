
export declare global {
  import { IStorageCookie } from 'types/storage-cookie'
  export interface Window {
    storageCookie: IStorageCookie
  }
}
