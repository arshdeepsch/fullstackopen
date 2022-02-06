import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import axios from 'axios'


const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    console.log('in effect')
    axios.get('http://localhost:3001/persons').then((resp) => { setPersons(resp.data); setFiltered(resp.data) })
  }, [])

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