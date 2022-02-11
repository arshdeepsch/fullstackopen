import React from "react";
import Person from "./Person";

const Persons = ({ filtered, persons, setFiltered,setPersons }) => {
    return (
        <div>
            {filtered.map((person) => {
                return (
                    <Person key={person.id} person={person}  persons={persons} setFiltered={setFiltered} setPersons = {setPersons} />
                )
            })}
        </div>
    )
}

export default Persons;