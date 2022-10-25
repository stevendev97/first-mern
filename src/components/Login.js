import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const handelSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:1337/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                password,
            }),
        })
        const data = await response.json()

        if (data.user) {
            navigate('/')
        }
        console.log(data)
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <form className="form-wrapper" onSubmit={handelSubmit}>
                <input value={name} type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <input value={password} type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value='Login' />
            </form>
        </div>
    );
}