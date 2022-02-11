import React, { useState } from 'react'
import DeleteButton from './DeleteButton'

const Person = ({ persons, person, setFiltered, setPersons }) => {
    return (
        <div className='person'> {person.name} {person.number} <DeleteButton key={person.id} person={person} persons={persons} setFiltered={setFiltered} setPersons={setPersons} />
        </div>
    )
}

export default Person