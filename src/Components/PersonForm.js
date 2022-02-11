import React, { useState } from "react"
import PersonService from "../service/PersonService"

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
            const t = window.confirm(`${newName} is already in the phonebook. Replace the old number with a new one?`)
            if (t) {
                const obj = { ...persons.find((person) => person.name == newName), number: newObj.number };
                PersonService.update(obj.id, obj).then(resp => {
                    setPersons(persons.filter(person => person.id != obj.id).concat(resp.data))
                    setFiltered(persons.filter(person => person.id != obj.id).concat(resp.data))
                }
                );
            }
        } else {
            PersonService.create(newObj).then(resp => {
                setPersons(persons.concat(resp.data))
                setFiltered(persons.concat(resp.data))
            })
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