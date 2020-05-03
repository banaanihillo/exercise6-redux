import axios from "axios"
const address = "http://localhost:3001/anecdotes"

const getAll = async () => {
    const response = await axios.get(address)
    return response.data
}

export default {getAll}
