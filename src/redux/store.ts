import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { authReducer } from './reducers/auth/auth'
import { widgetReducer } from './reducers/widget/widget'
import { appReducer } from './reducers/app/app'

const rootReducer = combineReducers({
  auth: authReducer,
  widget: widgetReducer,
  app: appReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
