import anecdoteService from "../services/anecdoteService"

const anecdoteReducer = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZE":
            return action.data
        case "VOTE":
            const anecdoteToVote = state.find(anecdote => anecdote.id === action.id)
            const votedAnecdote = {...anecdoteToVote, votes: anecdoteToVote.votes + 1}
            const updatedAnecdotes = state.map(anecdote => {
                return (anecdote.id === action.id)
                    ? votedAnecdote
                    : anecdote
            })
            return updatedAnecdotes
        case "CREATE":

            const updatedState = [...state, action.content]
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

export const addVote = (id) => {
    return {
        type: "VOTE",
        id: id
    }
}

export default anecdoteReducer
