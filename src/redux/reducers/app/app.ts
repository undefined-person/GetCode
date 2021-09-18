import { AppAction, AppActionsTypes, AppState } from './types'

const initialState: AppState = {
  error: '',
  isLoading: false,
}

export const appReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionsTypes.SET_LOADING:
      return { ...state, isLoading: action.payload }
    case AppActionsTypes.SET_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
