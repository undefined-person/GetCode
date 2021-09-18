import { IUser } from '../../../models/IUser'

export interface AuthState {
  user: IUser
  isAuth: boolean
}

export enum AuthActionsTypes {
  SET_USER = 'SET_USER',
  SET_AUTH = 'SET_AUTH',
}

export interface SetUserAction {
  type: AuthActionsTypes.SET_USER
  payload: IUser
}

export interface SetAuthAction {
  type: AuthActionsTypes.SET_AUTH
  payload: boolean
}

export type AuthAction = SetUserAction | SetAuthAction
