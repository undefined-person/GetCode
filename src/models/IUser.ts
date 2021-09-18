import { Store } from './IStore'

export interface IUser {
  first_name: string
  last_name: string
  username: string
  email: string
  country_code: string
  state: string
  address: string
  zip: string
  phone: string
  city: string
  stores: Array<Store>
}
