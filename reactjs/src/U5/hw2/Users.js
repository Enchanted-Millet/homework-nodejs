import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const Container = styled.div`
    margin: 0;
    padding: 0;
    border: none;
    width: 100vw;
`

const List = styled.div`
    width: 40vw;
    height: 100vh;
    overflow: scroll;
    margin: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    table {
        text-align: center;
        margin: auto;

        th {
            font-size: 1.2rem;
        }

        th,
        td {
            border-bottom: 1px solid #ddd;
            padding: 2px 10px;
        }
    }

    .avatar-small {
        width: 50px;
        height: 50px;
    }

    .name-anchor {
        background: none;
        border: none;
        outline: none;
        font-size: 1rem;
        cursor: pointer;
    }
`

const UserList = ({ id, login, avatar_url }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>
                <Link className="name-anchor" to={login}>
                    {login}
                </Link>
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

const Users = () => {
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users?per_page=30')
            .then(res => res.json())
            .then(response => {
                setAllUsers(response)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <Container>
            <List>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>username</th>
                            <th>image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map((item, index) => (
                            <UserList key={item.id} {...item} idx={index} />
                        ))}
                    </tbody>
                </table>
            </List>
        </Container>
    )
}

export default Users
