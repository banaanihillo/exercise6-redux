import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {addVote} from "../reducers/anecdoteReducer"

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => 
        state.reverse(state.sort((comparable, comparator) => 
            (comparable.votes - comparator.votes)
        ))
    )

    const vote = (anecdote) => {
        dispatch(addVote(anecdote.id))
        console.log(`Successfully voted for "${anecdote.content}".`)
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
