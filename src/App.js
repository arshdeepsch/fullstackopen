import React, { useState } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'


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

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter persons={persons} setFiltered={setFiltered} />
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewNum={setNewNum}
        setFiltered={setFiltered}
        newName={newName}
        newNum={newNum}
      />
      <h2>Numbers</h2>
      <Persons filtered={filtered} />
    </div>
  )
}

export default App