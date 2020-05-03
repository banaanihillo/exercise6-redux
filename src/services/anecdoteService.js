import axios from "axios"
const address = "http://localhost:3001/anecdotes"

const getAll = async () => {
    const response = await axios.get(address)
    return response.data
}

const createAnecdote = async (content) => {
    const anecdoteObject = {
        content: content,
        id: Math.floor(Math.random() * 1000000),
        votes: 0
    }
    const response = await axios.post(address, anecdoteObject)
    return response.data
}

const updateVote = async (anecdote) => {
    const updatedAnecdote = {
        content: anecdote.content,
        id: anecdote.id,
        votes: (anecdote.votes + 1)
    }
    const response = await axios.put(`${address}/${anecdote.id}`, updatedAnecdote)
    return response.data
}

export default {getAll, createAnecdote, updateVote}
