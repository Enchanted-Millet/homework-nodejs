import React, { Component } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'
import { Avatar, Card, Skeleton, Table } from 'antd'

const Container = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    border: none;
    width: 100%;
`

const CardComponent = ({
    avatar_url,
    name,
    login,
    location,
    userLoading,
    repos
}) => {
    return (
        <Card
            style={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            bordered={false}
            bodyStyle={{
                border: '1px solid #f0f0f0',
                boxShadow: '1px 1px 15px 1px slategrey',
                width: '500px'
            }}
        >
            <Skeleton
                loading={userLoading}
                avatar={{ shape: 'circle', size: 'large' }}
                active
            >
                <Card.Meta
                    avatar={
                        <Avatar
                            src={avatar_url}
                            alt={login}
                            shape="circle"
                            size={128}
                        />
                    }
                    title={name}
                    description={
                        <>
                            <p>Location: {location}</p>
                            <p>Repositories:</p>
                            <ul>
                                {repos.slice(0, 3).map(repo => {
                                    return (
                                        <li key={repo.id}>
                                            <a href={repo.html_url}>
                                                {repo.name}
                                            </a>
                                            <p>{repo.description}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </>
                    }
                />
            </Skeleton>
        </Card>
    )
}

class GithubPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allUser: [],
            user: {},
            repos: [],
            userLoading: null
        }
    }

    componentDidMount() {
        // fetch api
        // fetch()
        axios
            .get('https://api.github.com/users?per_page=20')
            .then(response => {
                this.setState({ allUser: response.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    showOneUser = id => () => {
        this.setState({ userLoading: true })
        Promise.allSettled([
            axios.get(this.state.allUser[id].url),
            axios.get(this.state.allUser[id].repos_url)
        ])
            .then(([userResult, repoResult]) => {
                if (userResult.status === 'fulfilled') {
                    this.setState({ user: userResult.value.data })
                }
                if (repoResult.status === 'fulfilled') {
                    this.setState({ repos: repoResult.value.data })
                }
            })
            .finally(() => this.setState({ userLoading: false }))
        // axios
        //     .get(this.state.allUser[id].url)
        //     .then(res => this.setState({ user: res.data }))
        //     .catch(err => console.log(err))
        //     .finally(() => this.setState({ userLoading: false }))
        // axios
        //     .get(this.state.allUser[id].repos_url)
        //     .then(res => this.setState({ repos: res.data }))
        //     .catch(err => console.log(err))
    }

    render() {
        const data = this.state.allUser.map((user, idx) => ({
            key: idx,
            id: user.id,
            username: user.login,
            image: user.avatar_url
        }))
        const { user, userLoading, repos } = this.state
        return (
            <Container>
                <Table
                    dataSource={data}
                    pagination={false}
                    onRow={(record, rowIndex) => ({
                        onClick: this.showOneUser(record.key)
                    })}
                >
                    <Table.Column title="ID" dataIndex="id" />
                    <Table.Column title="Username" dataIndex="username" />
                    <Table.Column
                        title="Image"
                        dataIndex="image"
                        render={image => (
                            <Avatar src={image} size={64} shape="square" />
                        )}
                    />
                </Table>
                {userLoading !== null ? (
                    <CardComponent
                        {...user}
                        userLoading={userLoading}
                        repos={repos}
                    />
                ) : null}
            </Container>
        )
    }
}

export default GithubPage
