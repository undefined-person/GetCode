import { AppActionsCreators } from './app/action-creators'
import { AuthActionsCreators } from './auth/action-creators'
import { WidgetActionsCreators } from './widget/action-creators'

export const allActionCreators = {
  ...AuthActionsCreators,
  ...WidgetActionsCreators,
  ...AppActionsCreators,
}
