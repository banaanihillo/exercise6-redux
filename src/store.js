import {composeWithDevTools} from "redux-devtools-extension"
import {createStore, combineReducers} from "redux"
import anecdoteReducer from "./reducers/anecdoteReducer"
import notificationReducer from "./reducers/notificationReducer"

const combinedReducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer
})
const store = createStore(combinedReducer, composeWithDevTools())
export default store
