import React, { Component } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    width: 400px;
    margin: auto;
    display: block;
`;

export default class Login extends Component {
    constructor(props) {
        super(props);
        const today = new Date();
        const yesterday = new Date(
            new Date().setDate(new Date().getDate() - 1)
        );
        const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));
        this.users = {
            today: {
                username: 'today',
                password: today.toISOString().split('T')[0].replaceAll('-', '')
            },
            yesterday: {
                username: 'yesterday',
                password: yesterday
                    .toISOString()
                    .split('T')[0]
                    .replaceAll('-', '')
            },
            tomorrow: {
                username: 'tomorrow',
                password: tomorrow
                    .toISOString()
                    .split('T')[0]
                    .replaceAll('-', '')
            }
        };

        this.state = {
            username: '',
            password: '',
            loggedIn: false,
            error: ''
        };
    }

    checkUser = () => {
        const { username: inputUsername, password: inputPassword } = this.state;
        switch (inputUsername) {
            case 'today':
                return inputPassword === this.users.today.password;
            case 'yesterday':
                return inputPassword === this.users.yesterday.password;
            case 'tomorrow':
                return inputPassword === this.users.tomorrow.password;
            default:
                return false;
        }
    };

    handleLogIn = () => {
        if (this.checkUser()) {
            this.setState({ loggedIn: true });
        } else {
            this.setState({
                loggedIn: false,
                error: 'The username or password is wrong!'
            });
        }
    };

    handleLogOut = () => {
        if (this.state.loggedIn) {
            this.setState({ loggedIn: false, error: '' });
        }
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const {
            username,
            password,
            loggedIn,
            error: errorMessage
        } = this.state;
        return (
            <Container>
                {!loggedIn ? (
                    <>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                className="form-control"
                                onChange={this.handleChange}
                                value={username}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="text"
                                className="form-control"
                                onChange={this.handleChange}
                                value={password}
                            />
                        </div>
                        <div style={{ color: 'red' }}>{errorMessage}</div>
                        <div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.handleLogIn}
                            >
                                Log in
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div>Welcome to my system!</div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.handleLogOut}
                        >
                            Log out
                        </button>
                    </>
                )}
            </Container>
        );
    }
}
