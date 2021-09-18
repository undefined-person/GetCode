import { IWidget } from '../../../models/IWidget'
import { WidgetAction, WidgetState, WidgetActionsTypes } from './types'

const initialState: WidgetState = {
  widget: [] as Array<IWidget>,
}

export const widgetReducer = (state = initialState, action: WidgetAction): WidgetState => {
  switch (action.type) {
    case WidgetActionsTypes.SET_WIDGET:
      return { ...state, widget: [...action.payload] }
    case WidgetActionsTypes.CREATE_WIDGET:
      return { ...state, widget: [...state.widget, action.payload] }
    default:
      return state
  }
}
