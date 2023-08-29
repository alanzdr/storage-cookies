import StorageCookie from 'modules/storage-cookie'
import { observeCookie } from 'modules/observer'
import { saveDefaults } from 'modules/defaults'

const STORAGE_KEY = 'site-cookies'

window.storageCookie = StorageCookie(STORAGE_KEY)

saveDefaults(window.storageCookie)
observeCookie(window.storageCookie)