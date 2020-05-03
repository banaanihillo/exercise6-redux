import anecdoteService from "../services/anecdoteService"

const anecdoteReducer = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZE":
            return action.data
        case "VOTE":
            const anecdoteToVote = state.find(anecdote =>
                anecdote.id === action.data.id
            )
            const votedAnecdote = {...anecdoteToVote, votes: anecdoteToVote.votes + 1}
            const updatedAnecdotes = state.map(anecdote => {
                return (anecdote.id === action.data.id)
                    ? votedAnecdote
                    : anecdote
            })
            return updatedAnecdotes
        case "CREATE":
            const updatedState = [...state, action.data]
            return updatedState
        default:
            return state
    }
    
}

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch({
            type: "INITIALIZE",
            data: anecdotes
        })
    }
}

export const addAnecdote = (content) => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.createAnecdote(content)
        dispatch({
            type: "CREATE",
            data: newAnecdote
        })
    }
}

export const addVote = (anecdote) => {
    return async dispatch => {
        const anecdoteWithVoteAdded = await anecdoteService.updateVote(anecdote)
        dispatch({
            type: "VOTE",
            data: anecdoteWithVoteAdded
        })
    }
}

export default anecdoteReducer
