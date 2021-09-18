import { AppActionsTypes, SetErrorAction, SetLoadingAction } from './types'

export const AppActionsCreators = {
  setError: (error: string): SetErrorAction => ({ type: AppActionsTypes.SET_ERROR, payload: error }),
  setLoading: (loading: boolean): SetLoadingAction => ({ type: AppActionsTypes.SET_LOADING, payload: loading }),
}
