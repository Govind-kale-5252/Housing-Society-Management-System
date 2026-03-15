import './NewPerson.css'
import React, { useState } from 'react'
import { createPerson } from '../services/PersonService'
import { useNavigate } from 'react-router-dom'

const NewPerson = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [building, setBuilding] = useState('')
    const [flat, setFlat] = useState('')

    const navigate = useNavigate()

    function savePerson(e) {
        e.preventDefault()

        const person = { name, phone, building, flat }
        console.log(person)

        createPerson(person)
            .then((response) => {
                console.log(response.data)
                navigate('/getAll')  
            })
            .catch(error => {
                console.error(error)
            })   
    }

    function resetForm() {
        setName('')
        setPhone('')
        setBuilding('')
        setFlat('')
    }

    return (
        <div className='newperson-container'>
            <h1>Add New Person</h1>
            
            <div className='newperson-form-container'>
                <form>
                    <div className='form-group mb-3'>
                        <label className='form-label'>Name*</label>
                        <input
                            type='text'
                            placeholder='Enter Person Name'
                            value={name}
                            className='form-control'
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label className='form-label'>Phone No*</label>
                        <input
                            type='text'
                            placeholder='Enter Person Phone'
                            value={phone}
                            className='form-control'
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label className='form-label'>Building*</label>
                        <input
                            type='text'
                            placeholder='Enter Person Building'
                            value={building}
                            className='form-control'
                            onChange={(e) => setBuilding(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label className='form-label'>Flat*</label>
                        <input
                            type='text'
                            placeholder='Enter Person Flat'
                            value={flat}
                            className='form-control'
                            onChange={(e) => setFlat(e.target.value)}
                            required
                        />
                    </div>

                    <div className='d-flex justify-content-between'>
                        <button type='button' className='btn btn-secondary' onClick={resetForm}>Reset</button>
                        <button className='btn btn-success' onClick={savePerson}>Save Person</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewPerson