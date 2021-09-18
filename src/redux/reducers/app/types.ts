export interface AppState {
  isLoading: boolean
  error: string
}

export enum AppActionsTypes {
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
}

export interface SetLoadingAction {
  type: AppActionsTypes.SET_LOADING
  payload: boolean
}

export interface SetErrorAction {
  type: AppActionsTypes.SET_ERROR
  payload: string
}

export type AppAction = SetErrorAction | SetLoadingAction
