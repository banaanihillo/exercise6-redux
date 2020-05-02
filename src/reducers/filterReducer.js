const filterReducer = (state = null, action) => {
    switch (action.type) {
        case "FILTER":
            return action.filteredAnecdotes
        default:
            return state
    }
}

export const filterAnecdotes = (filteredAnecdotes) => {
    return {
        type: "FILTER",
        filteredAnecdotes: filteredAnecdotes
    }
}

export default filterReducer
