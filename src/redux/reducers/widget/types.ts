import { IWidget } from '../../../models/IWidget'

export interface WidgetState {
  widget: Array<IWidget>
}

export enum WidgetActionsTypes {
  SET_WIDGET = 'SET_WIDGET',
  CREATE_WIDGET = 'CREATE_WIDGET',
}

export interface CreateWidgetAction {
  type: WidgetActionsTypes.CREATE_WIDGET
  payload: IWidget
}

export interface SetWidgetAction {
  type: WidgetActionsTypes.SET_WIDGET
  payload: Array<IWidget>
}

export type WidgetAction = CreateWidgetAction | SetWidgetAction
