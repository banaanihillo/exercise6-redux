import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {addVote} from "../reducers/anecdoteReducer"
import {displayNotification, hideNotification} from "../reducers/notificationReducer"


const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => 
        state.anecdotes.reverse(state.anecdotes.sort((comparable, comparator) => 
            (comparable.votes - comparator.votes)
        ))
    )

    const vote = (anecdote) => {
        dispatch(addVote(anecdote.id))
        const notification = (`Successfully voted for "${anecdote.content}".`)
        dispatch(displayNotification(notification))
        setTimeout(() => {
            dispatch(hideNotification())
        }, 5000)
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key = {anecdote.id}>
                    <p> {anecdote.content} </p>
                    <p> Votes given to this anecdote: {anecdote.votes} </p>
                    <button onClick = {() => vote(anecdote)}>
                        Vote for this anecdote
                    </button>
                </div>
            )}
        </div>
    )
}
export default AnecdoteList
