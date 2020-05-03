import React from "react"
import {useDispatch} from "react-redux"
import {addAnecdote} from "../reducers/anecdoteReducer"
import {displayNotification, hideNotification} from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdoteService"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const createAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.newAnecdote.value
        event.target.newAnecdote.value = ""
        const newAnecdote = await anecdoteService.createAnecdote(content)

        dispatch(addAnecdote(newAnecdote))

        const notification = (`Successfully added "${content}".`)
        dispatch(displayNotification(notification))
        setTimeout(() => {
            dispatch(hideNotification())
        }, 5000)
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
