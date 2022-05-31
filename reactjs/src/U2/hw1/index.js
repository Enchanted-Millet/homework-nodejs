import React, { Component } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

const Container = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    border: none;
    width: 100%;
`;

const List = styled.div`
    width: 40%;
    height: 100vh;
    overflow: scroll;

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
`;

const DetailContainer = styled.div`
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
`;

const ItemList = ({ id, idx, login, avatar_url, showOneUser }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>
                <button className="name-anchor" onClick={showOneUser(idx)}>
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
    );
};

const Detail = props => {
    if ('name' in props.user) {
        return (
            <DetailContainer>
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
                        );
                    })}
                </ul>
            </DetailContainer>
        );
    } else {
        return null;
    }
};

class GithubPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allUser: [],
            user: {},
            repos: []
        };
    }

    componentDidMount() {
        // fetch api
        axios
            .get('https://api.github.com/users?per_page=20')
            .then(response => {
                this.setState({ allUser: response.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    showOneUser = id => () => {
        axios
            .get(this.state.allUser[id].url)
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err));
        axios
            .get(this.state.allUser[id].repos_url)
            .then(res => this.setState({ repos: res.data }))
            .catch(err => console.log(err));
    };

    render() {
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
                            {this.state.allUser.map((item, index) => (
                                <ItemList
                                    key={item.id}
                                    {...item}
                                    idx={index}
                                    showOneUser={this.showOneUser}
                                />
                            ))}
                        </tbody>
                    </table>
                </List>
                <Detail user={this.state.user} repos={this.state.repos} />
            </Container>
        );
    }
}

export default GithubPage;
