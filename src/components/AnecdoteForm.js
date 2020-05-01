import React from "react"
import {useDispatch} from "react-redux"
import {addAnecdote} from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const createAnecdote = (event) => {
        event.preventDefault()
        dispatch(addAnecdote(event.target.newAnecdote.value))
        console.log(`Successfully added "${event.target.newAnecdote.value}".`)
        event.target.newAnecdote.value = ""
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
