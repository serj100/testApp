import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { feedsReducer } from './reducers/feedsReducer'

const rootReducer = combineReducers({
	feeds: feedsReducer,
})

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)
