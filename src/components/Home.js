import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='container'>
            <div className="option-wrapper">
                <h1>Home Page</h1>
                <p>Click Login if you have an account already</p>
                <div className='button-wrapper'>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}