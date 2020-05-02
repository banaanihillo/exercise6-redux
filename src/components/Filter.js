import React from "react"
import {filterAnecdotes} from "../reducers/filterReducer"
import {useDispatch, useSelector} from "react-redux"
const Filter = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()
    const handleChange = (event) => {
        const filteredAnecdotes = anecdotes.filter(anecdote =>
            anecdote.content.toLowerCase().includes(event.target.value.toLowerCase())
        )
        dispatch(filterAnecdotes(filteredAnecdotes))
    }
    const style = {
        marginTop: 5,
        marginBottom: 5
    }
    return (
        <div style = {style}>
            Search for an anecdote: <input onChange = {handleChange} />
        </div>
    )
}
export default Filter
