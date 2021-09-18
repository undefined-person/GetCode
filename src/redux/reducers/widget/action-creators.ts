import { instance } from '../../../api/apiInstance'
import { IWidget } from '../../../models/IWidget'
import { AppDispatch } from '../../store'
import { AppActionsCreators } from '../app/action-creators'
import { CreateWidgetAction, SetWidgetAction, WidgetActionsTypes } from './types'

export const WidgetActionsCreators = {
  setWidget: (widget: Array<IWidget>): SetWidgetAction => ({ type: WidgetActionsTypes.SET_WIDGET, payload: widget }),
  createWidget: (widget: IWidget): CreateWidgetAction => ({ type: WidgetActionsTypes.CREATE_WIDGET, payload: widget }),
  getWidget: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(AppActionsCreators.setLoading(true))
      const widget = await instance.get('merchant/widgets', { headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token') || '') } }).then(res => res.data)
      dispatch(WidgetActionsCreators.setWidget(widget))
      dispatch(AppActionsCreators.setLoading(false))
    } catch (error) {
      dispatch(AppActionsCreators.setError(error as string))
    }
  },
  create: (name: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AppActionsCreators.setLoading(true))
      const widget = await instance.post('merchant/widgets/feed/save', { name, lang: 'en', template_type: 'booster' }, { headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token') || '') } }).then(res => res.data)
      dispatch(WidgetActionsCreators.createWidget(widget))
      dispatch(AppActionsCreators.setLoading(false))
    } catch (error) {
      dispatch(AppActionsCreators.setError(error as string))
    }
  },
  dublicateWidget: (id: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AppActionsCreators.setLoading(true))
      const widget = await instance.get(`merchant/widgets/feed/duplicate/${id}`, { headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token') || '') } }).then(res => res.data)
      dispatch(WidgetActionsCreators.createWidget(widget))
      dispatch(AppActionsCreators.setLoading(false))
    } catch (error) {
      dispatch(AppActionsCreators.setError(error as string))
    }
  },
  deleteWidget: (id: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AppActionsCreators.setLoading(true))
      const widget = await instance.delete(`merchant/widgets/feed/delete/${id}`, { headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token') || '') } }).then(res => res.data)
      dispatch(WidgetActionsCreators.setWidget(widget))
      dispatch(AppActionsCreators.setLoading(false))
    } catch (error) {
      dispatch(AppActionsCreators.setError(error as string))
    }
  },
  editWidget: (id: number, name: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AppActionsCreators.setLoading(true))
      const widget = await instance
        .post(`https://dev.nowdialogue.com/api/merchant/widgets/feed/save`, { name, lang: 'en', template_type: 'booster', id }, { headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token') || '') } })
        .then(res => res.data)
      dispatch(WidgetActionsCreators.createWidget(widget))
      dispatch(AppActionsCreators.setLoading(false))
    } catch (error) {
      dispatch(AppActionsCreators.setError(error as string))
    }
  },
}
