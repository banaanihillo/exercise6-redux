import React from "react"
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Notification from "./components/Notification"

const App = () => {

    return (
        <div>
            <h1> Anecdote Application </h1>
            <Notification />
            <AnecdoteForm />
            <AnecdoteList />
        </div>
    )
}

export default App
