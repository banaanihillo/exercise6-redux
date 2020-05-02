import {composeWithDevTools} from "redux-devtools-extension"
import {createStore, combineReducers} from "redux"
import anecdoteReducer from "./reducers/anecdoteReducer"
import notificationReducer from "./reducers/notificationReducer"
import filterReducer from "./reducers/filterReducer"

const combinedReducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filteredAnecdotes: filterReducer
})
const store = createStore(combinedReducer, composeWithDevTools())
export default store
