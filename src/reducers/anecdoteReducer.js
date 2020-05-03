/*
const initialAnecdotes = [
    "If it hurts, do it more often",
    "Adding [person]power to a late software project makes it later!",
    `The first 90 percent of the code
        accounts for the first 90 percent of the development time...
        The remaining 10 percent of the code accounts for
        the other 90 percent of the development time.`,
    `Any fool can write code that a computer can understand.
        Good programmers write code that humans can understand.`,
    "Premature optimization is the root of all evil.",
    `Debugging is twice as hard as writing the code in the first place.
        Therefore, if you write the code as cleverly as possible,
        you are, by definition, not smart enough to debug it.`
]
*/

/*
const idGenerator = () => (100000 * Math.random()).toFixed(0)

const generateObject = (anecdote) => {
    return {
        content: anecdote,
        id: idGenerator(),
        votes: 0
    }
}
*/
//const initialState = initialAnecdotes.map(generateObject)

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
            //const newAnecdote = generateObject(action.content)
            const updatedState = [...state, action.content]
            return updatedState
        default:
            return state
    }
    
}

export const initializeAnecdotes = (anecdotes) => {
    return {
        type: "INITIALIZE",
        data: anecdotes
    }
}

export const addAnecdote = (content) => {
    return {
        type: "CREATE",
        content: content
    }
}

export const addVote = (id) => {
    return {
        type: "VOTE",
        id: id
    }
}

export default anecdoteReducer
