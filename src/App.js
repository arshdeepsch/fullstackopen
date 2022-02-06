import React, { useState } from 'react'

const Person = ({ person }) => {
  return (
    <div> {person.name} {person.number}</div>
  )
}

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filtered, setFiltered] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

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
    }
    setNewName('')
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    setFiltered(persons.filter((person) => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  return (
    <div>
      <div>
        <h1>Phonebook</h1>
        filter shown with <input onChange={handleFilter}></input>
        <div>
          <h2>add a new</h2>
          <form onSubmit={handleSubmit}>
            <div>name: <input value={newName} onChange={handleNameChange}></input></div>
            <div>number: <input value={newNum} onChange={handleNumChange} /></div>
            <button type='submit'>add</button>
          </form>
        </div>
      </div>
      <div>
        <h2>Numbers</h2>
        {filtered.map(person => <Person key={person.id} person={person} />)}
      </div>
    </div>
  )
}

export default App