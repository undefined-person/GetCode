import { IUser } from '../../../models/IUser'
import { AuthAction, AuthActionsTypes, AuthState } from './types'

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionsTypes.SET_USER:
      return { ...state, user: action.payload }
    case AuthActionsTypes.SET_AUTH:
      return { ...state, isAuth: action.payload }
    default:
      return state
  }
}
