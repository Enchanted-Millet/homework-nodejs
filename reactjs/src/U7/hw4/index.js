import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers, fetchOneUser, fetchRepos } from '../redux/actions/user'
import './style.css'

const List = ({ id, login, avatar_url, showOneUser }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>
                <button className="name-anchor" onClick={showOneUser(login)}>
                    {login}
                </button>
            </td>

            <td>
                <img
                    className="avatar-small"
                    src={avatar_url}
                    alt={avatar_url}
                />
            </td>
        </tr>
    )
}

const PerPage = props => {
    if ('name' in props.user) {
        return (
            <div className="one">
                <img src={props.user.avatar_url} alt={props.user.lgoin} />
                <p>Name: {props.user.name}</p>
                <p>Location: {props.user.location}</p>
                <p>Repositories:</p>
                <ul>
                    {props.repos.slice(0, 10).map(repo => {
                        return (
                            <li key={repo.id}>
                                <a href={repo.html_url}>{repo.name}</a>
                                <p>{repo.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    } else {
        return null
    }
}

const GithubPage = () => {
    const { allUsers, currentUser, repos } = useSelector(state => state.hw4)
    const [searchInput, setSearchInput] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])

    const getOneUserDetails = login => {
        dispatch(fetchOneUser(login))
        dispatch(fetchRepos(login))
    }

    const showOneUser = login => () => {
        getOneUserDetails(login)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setSearchInput('')
        getOneUserDetails(searchInput)
    }

    const handleChange = e => {
        setSearchInput(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form-floating mb-3">
                <input
                    type="text"
                    id="search-user"
                    className="form-control"
                    placeholder="Enchanted-Miller"
                    onChange={handleChange}
                    value={searchInput}
                />
                <label htmlFor="search-user">Search by username</label>
            </form>
            <div className="container">
                <div className="list">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>username</th>
                                <th>image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.map((user, index) => (
                                <List
                                    key={user.id}
                                    {...user}
                                    idx={index}
                                    showOneUser={showOneUser}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                <PerPage user={currentUser} repos={repos} />
            </div>
        </>
    )
}

export default GithubPage
