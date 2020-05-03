import React from "react"
import {useDispatch} from "react-redux"
import {addAnecdote} from "../reducers/anecdoteReducer"
import {displayNotification} from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const createAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.newAnecdote.value
        event.target.newAnecdote.value = ""
        dispatch(addAnecdote(content))

        const notification = (`Successfully added "${content}".`)
        dispatch(displayNotification(notification, 6))
    }

    return (
        <form onSubmit = {createAnecdote}>
            <h2> Add a new anecdote here </h2>
            <input name = "newAnecdote" />
            <button type = "submit"> Submit new anecdote </button>
        </form>
    )
}

export default AnecdoteForm
