import React, {useEffect} from "react"
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Notification from "./components/Notification"
import Filter from "./components/Filter"
import anecdoteService from "./services/anecdoteService"
import {useDispatch} from "react-redux"
import {initializeAnecdotes} from "./reducers/anecdoteReducer"

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        anecdoteService
            .getAll()
            .then(anecdotes =>
                dispatch(initializeAnecdotes(anecdotes))
            )
    },
    [dispatch]
    )

    return (
        <div>
            <h1> Anecdote Application </h1>
            <Notification />
            <Filter />
            <AnecdoteForm />
            <AnecdoteList />
        </div>
    )
}

export default App
