import { AppActionsCreators } from './../app/action-creators'
import { instance } from '../../../api/apiInstance'
import { IUser } from '../../../models/IUser'
import { AppDispatch } from '../../store'
import { AuthActionsTypes, SetAuthAction, SetUserAction } from './types'

export const AuthActionsCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionsTypes.SET_USER, payload: user }),
  setAuth: (isAuth: boolean): SetAuthAction => ({ type: AuthActionsTypes.SET_AUTH, payload: isAuth }),
  login: (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AppActionsCreators.setLoading(true))
      const accessToken = await instance.post('auth/login', { email, password }).then(res => res.data.accessToken)
      const user = await instance.get('merchant/profile', { headers: { Authorization: 'Bearer ' + accessToken } }).then(res => res.data)
      dispatch(AuthActionsCreators.setUser(user))
      localStorage.setItem('token', JSON.stringify(accessToken))
      localStorage.setItem('username', user.username)
      dispatch(AuthActionsCreators.setAuth(true))
      dispatch(AppActionsCreators.setLoading(false))
    } catch (error) {
      dispatch(AppActionsCreators.setError(error as string))
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(AppActionsCreators.setLoading(true))
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      dispatch(AuthActionsCreators.setUser({} as IUser))
      dispatch(AuthActionsCreators.setAuth(false))
      dispatch(AppActionsCreators.setLoading(false))
    } catch (error) {
      dispatch(AppActionsCreators.setError(error as string))
    }
  },
  getUserInfo: () => async (dispatch: AppDispatch) => {
    try {
      const user = await instance.get('merchant/profile', { headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token') || '') } }).then(res => res.data)
      dispatch(AuthActionsCreators.setUser(user))
    } catch (error) {
      dispatch(AppActionsCreators.setError(error as string))
    }
  },
}
