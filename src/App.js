import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import personService from './service/PersonService.js'
import Notification from './Components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filtered, setFiltered] = useState([])
  const [message,setMessage] = useState({message:null,styleObj:null})

  useEffect(() => {
    personService.getAll().then((resp) => { setPersons(resp.data); setFiltered(resp.data) })
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message.message} styleObj = {message.styleObj}/>
      <Filter persons={persons} setFiltered={setFiltered} />
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewNum={setNewNum}
        setFiltered={setFiltered}
        newName={newName}
        newNum={newNum}
        setMessage = {setMessage}
      />
      <h2>Numbers</h2>
      <Persons filtered={filtered}  persons={persons} setFiltered={setFiltered} setPersons = {setPersons} />
    </div>
  )
}

export default App