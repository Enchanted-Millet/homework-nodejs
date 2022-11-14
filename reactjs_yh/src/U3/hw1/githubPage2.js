import styled from "@emotion/styled";
import React, { Component } from "react";
import UserRow from "./userRow";
import Card from "./card";

const Layout = styled.div`
  display: flex;
`;

const Table = styled.table`
  width: 40%;
  border-collapse: collapse;
  thead {
    background: LightGrey;
  }
`;
export default class GithubPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: [],
      repos: [],
      loading: "",
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/users?per_page=100")
      .then((response) => response.json())
      //???why here data is an array rather than a JSON object?
      .then((data) => {
        this.setState({ ...this.state, users: data });
      });
  }
  showOneUser = (id) => {
    this.setState({ loading: true });
    let userurl = this.state.users[id].url;
    let getUser = fetch(userurl).then((response) => response.json());
    let reposurl = this.state.users[id].repos_url; //get user and repos from the same users infos pool
    let getRepos = fetch(reposurl).then((response) => response.json());
    //once after response.json(), you can get the right status and value by using .then()
    Promise.allSettled([getUser, getRepos])
      .then(([userData, reposData]) => {
        let datas = [];
        if (userData.status === "fulfilled") {
          this.setState({ ...this.state, user: userData.value });
        }
        if (reposData.status === "fulfilled") {
          this.setState({ repos: reposData.value });
          //not use setState{...this.state, repos: reposData.value} here
          //it will clear the update of user in last step
        }
        this.setState({ loading: false });
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <>
        <h2>GithubPage2</h2>
        <Layout>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, idx) => (
                <UserRow
                  id={idx}
                  key={idx}
                  username={this.state.users[idx].login}
                  avatar={this.state.users[idx].avatar_url}
                  handleClick={this.showOneUser}
                  repos={this.state.repos}
                  user={this.state.user}
                />
              ))}
            </tbody>
          </Table>

          <Card
            loading={this.state.loading}
            oneUserName={this.state.user.login}
            repos={this.state.repos}
          />
        </Layout>
      </>
    );
  }
}
