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

const idGenerator = () => (100000 * Math.random()).toFixed(0)

const generateObject = (anecdote) => {
    return {
        content: anecdote,
        id: idGenerator(),
        votes: 0
    }
}

const initialState = initialAnecdotes.map(generateObject)

const anecdoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case "VOTE":
            const anecdoteToVote = state.find(anecdote => anecdote.id === action.id)
            const votedAnecdote = {...anecdoteToVote, votes: anecdoteToVote.votes + 1}
            const updatedAnecdotes = state.map(anecdote => {
                return (anecdote.id === action.id)
                    ? votedAnecdote
                    : anecdote
            })
            return updatedAnecdotes
        default:
            console.log("Just printin'")
            console.log(initialState)
    }
    return state
}

export default anecdoteReducer
