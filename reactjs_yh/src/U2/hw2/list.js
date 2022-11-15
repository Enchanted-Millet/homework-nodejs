import React, { Component } from "react";

const Users = (props) => {
  return (
    <>
      {props.users.map((user, idx) => (
        <tr key={idx + 1}>
          <td>{idx + 1}</td>
          <td>{user.username}</td>
          <td>
            <img src={user.avatar} alt="user avatar" width="100"></img>
          </td>
        </tr>
      ))}
    </>
  );
};

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        //   {username: "userjasd", avatar: "image"}
      ],
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/users?per_page=100")
      .then((response) => response.json())
      .then((data) => {
        let infos = data; //??
        let users = [];
        infos.map((info) => {
          let user = { username: info.login, avatar: info.avatar_url };
          users.push(user);
        });
        this.setState((prevstate) => ({
          ...prevstate,
          users: users,
        }));
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>username</th>
              <th>image</th>
            </tr>
          </thead>
          <tbody>
            <Users users={this.state.users} />
          </tbody>
        </table>
      </>
    );
  }
}
