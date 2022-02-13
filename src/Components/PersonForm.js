import React from "react"
import PersonService from "../service/PersonService"


const PersonForm = ({ persons, setPersons, setNewName, setNewNum, setFiltered, newName, newNum, setMessage }) => {
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
                const obj = { ...persons.find((person) => person.name === newName), number: newObj.number };
                PersonService.update(persons.find((person) => person.name === newName).id, obj).then(resp => {
                    console.log(resp);
                    setPersons(persons.filter(person => person.id !== obj.id).concat(resp.data))
                    setFiltered(persons.filter(person => person.id !== obj.id).concat(resp.data))
                }
                ).catch(
                    (err) => {
                        console.log(err)
                        setMessage({
                            message: `Information of ${newObj.name} has already been removed from the server`,
                            styleObj: {
                                padding: 10,
                                backgroundColor: 'gray',
                                borderRadius: 5,
                                borderWidth: 5,
                                color: 'red',
                                borderStyle: 'solid'
                            }
                        })
                        setTimeout(() => {
                            setMessage({ message: null, styleObj: null });
                        }, 5000)
                    }
                )
            }
        } else {
            PersonService.create(newObj).then(resp => {
                setPersons(persons.concat(resp.data))
                setFiltered(persons.concat(resp.data))
                setMessage({
                    message: `Added ${newObj.name}`,
                    styleObj: {
                        padding: 10,
                        backgroundColor: 'gray',
                        borderRadius: 5,
                        borderWidth: 5,
                        color: 'green',
                        borderStyle: 'solid'
                    }
                })
                setTimeout(() => {
                    setMessage({ message: null, styleObj: null });
                }, 5000)
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