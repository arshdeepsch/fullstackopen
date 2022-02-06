import React, { useState } from "react"

const PersonForm = ({ persons, setPersons, setNewName, setNewNum, setFiltered, newName, newNum }) => {
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumChange = (event) => {
        setNewNum(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const newObj = {
            name: newName,
            number: newNum,
            id: persons.length + 1
        }
        if (newName.trim().length === 0) {
        }
        else if (persons.filter((person) => (person.name === newName)).length > 0) {
            alert(`${newName} is already in the phonebook`)
        } else {
            setPersons(persons.concat(newObj))
            setFiltered(persons.concat(newObj))
        }
        setNewName('')
    }
    return (
        <div>
            <h2>add a new</h2>{ }
            <form onSubmit={handleSubmit}>
                <div>name: <input value={newName} onChange={handleNameChange}></input></div>
                <div>number: <input value={newNum} onChange={handleNumChange} /></div>
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default PersonForm