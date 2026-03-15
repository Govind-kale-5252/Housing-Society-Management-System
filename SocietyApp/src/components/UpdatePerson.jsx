import './UpdatePerson.css'
import React, { useEffect, useState } from 'react'
import { getPerson, updatePerson } from '../services/PersonService'
import { useNavigate, useParams } from 'react-router-dom'

const UpdatePerson = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [building, setBuilding] = useState('')
    const [flat, setFlat] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            getPerson(id)
                .then((response) => {
                    setName(response.data.name)
                    setPhone(response.data.phone)
                    setBuilding(response.data.building)
                    setFlat(response.data.flat)
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }, [id])

    function handleSubmit(e) {
        e.preventDefault()

        // Create person object with ID included
        const person = { 
            id: parseInt(id), // Convert string to number
            name, 
            phone, 
            building, 
            flat 
        }
        
        console.log('Updating person:', person)

        // Pass person object (with ID) to updatePerson
        updatePerson(person)
            .then((response) => {
                console.log('Updated successfully:', response.data)
                navigate('/getAll')
            })
            .catch(error => {
                console.error('Update error:', error)
                alert('Failed to update person')
            })
    }
    return (
        <div className='update-container'>
            <h1>Update Person</h1>
            
            <div className='update-form-container'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='form-label'>Name</label>
                        <input
                            type='text'
                            placeholder='Enter Person Name'
                            value={name}
                            className='form-control'
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className='mb-3'>
                        <label className='form-label'>Phone</label>
                        <input
                            type='text'
                            placeholder='Enter Person Phone'
                            value={phone}
                            className='form-control'
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className='mb-3'>
                        <label className='form-label'>Building</label>
                        <input
                            type='text'
                            placeholder='Enter Person Building'
                            value={building}
                            className='form-control'
                            onChange={(e) => setBuilding(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className='mb-3'>
                        <label className='form-label'>Flat</label>
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
                        <button type='button' className='btn btn-secondary' onClick={() => navigate('/getAll')}>Cancel</button>
                        <button type='submit' className='btn btn-primary'>Update Person</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdatePerson