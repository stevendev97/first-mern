import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const handelSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:1337/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })
        const data = await response.json()

        if (data.status === 'ok') {
            navigate('/login')
        }
        console.log(data)
    }

    return (
        <div className="container">
            <h1>Register</h1>
            <form className="form-wrapper" onSubmit={handelSubmit}>
                <input value={name} autoSave='false' type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <input value={email} autoSave='false' type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <input value={password} autoSave='false' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value='Register' />
            </form>
        </div>
    );
}