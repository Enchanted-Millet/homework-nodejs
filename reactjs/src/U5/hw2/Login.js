import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

const Container = styled.div`
    width: 30vw;
    min-width: 400px;
    margin: 0 auto;
`

const LoginForm = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const navigate = useNavigate()

    const handleChange = e => {
        const { name, value } = e.target
        if (name === 'username') {
            setUsername(value)
        } else if (name === 'password') {
            setPassword(value)
        } else {
            console.log('error')
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(username, password)
        if (username === 'username' && password === 'password') {
            sessionStorage.setItem('username', username)
            navigate('/')
        } else {
            alert('Invalid username or password')
        }
    }

    return (
        <Container>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        value={username}
                        autoComplete="off"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="form-control"
                        onChange={handleChange}
                        value={password}
                        autoComplete="off"
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </Container>
    )
}

export default LoginForm
