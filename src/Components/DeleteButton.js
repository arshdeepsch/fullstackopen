import React from "react";
import PersonService from "../service/PersonService";

const DeleteButton = ({ persons, person, setFiltered,setPersons }) => {
    const handleDeleteClick = (event) => {
        const t = window.confirm(`Delete ${persons.find((person) => person.id == event.target.name).name}`)
        if (t) {
            PersonService.remove(event.target.name).then(
                setFiltered(persons.filter((person) => person.id != event.target.name)),
                setPersons(persons.filter((person) => person.id != event.target.name))
            ).catch(err => console.log(err))
        }
    }

    return (
        <button name={person.id} onClick={handleDeleteClick}>delete</button>
    )
}

export default DeleteButton;