import React, { useState } from 'react'

const Filter = ({ persons, setFiltered }) => {
    const handleFilter = (event) => {
        setFiltered(persons.filter((person) => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }
    return (
        <div>
            filter shown with <input onChange={handleFilter}></input>
        </div>
    )
}

export default Filter;