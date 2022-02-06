import React, { useState } from "react";
import Person from "./Person";

const Persons = ({ filtered }) => {
    return (
        <div>
            {filtered.map(person => <Person key={person.id} person={person} />)}
        </div>
    )
}

export default Persons;