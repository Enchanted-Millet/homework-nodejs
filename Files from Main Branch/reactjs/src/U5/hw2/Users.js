import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const List = ({ id, login, avatar_url }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>
                <Link className="name-anchor" to={login}>
                    {login}
                </Link>
            </td>

            <td>
                <img className="avatar-small" src={avatar_url} alt={avatar_url} />
            </td>
        </tr>
    );
};

const Users = () => {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users?per_page=100')
            .then(res => res.json())
            .then(response => {
                setAllUsers(response);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
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
                        {allUsers.map((item, index) => (
                            <List key={item.id} {...item} idx={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
