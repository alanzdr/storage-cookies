import { IStorageCookie } from "types/storage-cookie";

export function observeCookie (storage: IStorageCookie) {
  
  if(!document.__defineGetter__) {
    Object.defineProperty(document, 'cookie', {
      get: function () {
        return storage.toString()
      },
      set: function (val: string) {
        storage.setString(val)
        return false
      },
      configurable: true,
    })
  } else {
    document.__defineGetter__("cookie", function() { 
      return storage.toString() 
    });
    document.__defineSetter__("cookie", function(val: string) { 
      storage.setString(val); 
      return false; 
    });
  }
}