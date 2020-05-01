import React from "react"
import {useSelector, useDispatch} from "react-redux"

const App = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch({
            id: anecdote.id,
            type: "VOTE"
        })
        console.log(`Successfully voted for "${anecdote.content}".`)
    }

    return (
        <div>
            <h2> Anecdotes </h2>
            {anecdotes.map(anecdote =>
                <div key = {anecdote.id}>
                    <p> {anecdote.content} </p>
                    <p> Votes given to the above anecdote: {anecdote.votes} </p>
                    <button onClick = {() => vote(anecdote)}>
                        Vote for this anecdote
                    </button>
                </div>
            )}
            <h2> Create a new anecdote </h2>
            <form>
                <div>
                    <input />
                </div>
                <button> Submit new anecdote </button>
                </form>
        </div>
    )
}

export default App
