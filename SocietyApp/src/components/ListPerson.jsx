import React, { useEffect, useState } from 'react'
import { listPersons, deletePerson } from '../services/PersonService'
import { useNavigate } from 'react-router-dom'
import './ListPerson.css'

const ListPerson = () => {
    const [persons, setPersons] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        listPersons().then((response) => {
            setPersons(response.data)
        }).catch(error => {
            console.error(error)
        })
    }, [])

    function updatePerson(id) {
        navigate(`/update/${id}`)
    }

    function handleDeletePerson(personId) {
        if (window.confirm('Are you sure you want to delete this person?')) {
            deletePerson(personId)
                .then((response) => {
                    console.log('Deleted successfully:', response.data)
                    setPersons(persons.filter(person => person.id !== personId))
                })
                .catch(error => {
                    console.error('Delete error:', error)
                    alert('Failed to delete person')
                })
        }
    }

    return (
        <div className='list-container'>
            <h2>List of Persons</h2>
            
            <div className='list-content'>
                <div className="table-responsive">
                    <table className='table table-striped table-bordered table-hover list-table'>
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Building</th>
                                <th>Flat</th>
                                <th>Date & Time</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {persons.map((person, index) =>
                                <tr key={person.id}>
                                    <td className="serial-number">{index + 1}</td>
                                    <td>{person.name}</td>
                                    <td>{person.phone}</td>
                                    <td>{person.building}</td>
                                    <td>{person.flat}</td>
                                    <td>{person.currentDateTime}</td>
                                    <td>
                                        <button className='btn btn-info me-2' onClick={() => updatePerson(person.id)}>Update</button>
                                        <button className='btn btn-danger' onClick={() => handleDeletePerson(person.id)}>Delete</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListPerson