import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from '@emotion/styled'

const Container = styled.div`
    padding: 0 0 0 10px;
    height: 100vh;
    overflow: scroll;
    width: 62%;

    img {
        max-width: 300px;
    }

    ul {
        list-style: none;
        li:hover {
            font-size: 1.2rem;
            transition: font-size 0.3s;
        }
    }
`

const UserDetail = () => {
    const [user, setUser] = useState({})
    const [repos, setRepos] = useState([])

    const params = useParams()
    // https://localhost:8000/users/abc
    // params: {login: 'abc'}

    useEffect(() => {
        fetch(`https://api.github.com/users/${params.login}`)
            .then(res => res.json())
            .then(res => {
                setUser(res)
                return fetch(res.repos_url)
            })
            .then(res => res.json())
            .then(res => setRepos(res))
            .catch(err => console.log(err))
    }, [params.login])

    return (
        <Container>
            <img src={user.avatar_url} alt={user.lgoin} />
            <p>Name: {user.name}</p>
            <p>Location: {user.location}</p>
            <p>Repositories:</p>
            <ul>
                {repos.slice(0, 10).map(repo => {
                    return (
                        <li key={repo.id}>
                            <a href={repo.html_url}>{repo.name}</a>
                            <p>{repo.description}</p>
                        </li>
                    )
                })}
            </ul>
            <Link to="/users">Back to users</Link>
        </Container>
    )
}

export default UserDetail
