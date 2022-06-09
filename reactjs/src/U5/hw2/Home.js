import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const handleLogOut = () => {
        sessionStorage.removeItem('username')
        navigate('/')
    }

    const isLoggedIn = sessionStorage.getItem('username')

    return (
        <div>
            <h1>Home</h1>
            {isLoggedIn ? (
                <>
                    <h2>Welcome {sessionStorage.getItem('username')}</h2>
                    <button onClick={handleLogOut}>Log out</button>
                </>
            ) : (
                <Link to="/login" as="button">
                    Login
                </Link>
            )}
        </div>
    )
}

export default Home
