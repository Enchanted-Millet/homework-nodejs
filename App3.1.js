import React, {Component} from 'react'
import axios from 'axios'

function List(props){
    const imageStyle = {width: 100, height: 100};
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.login}</td>
            <td>
                <img style={imageStyle} src={props.avatar_url} alt={props.avatar_url}/>
            </td>
        </tr>
    );
}


export default class App extends Component{
    constructor(props){
        super(props);
    this.state= {data: [], detail: []};
    }

    componentDidMount(){
        axios({ method: 'get', url: 'https://api.github.com/users?per_page=100'})
        .then(response => {
            this.setState({data: response.data});
        })
        .catch(err => {
            alert(err);
        });
        
    }
  componentDidUpdate() {
    axios({ method: 'get', url: 'https://api.github.com/users/mojombo'})
    .then(response => {
        this.setState({data: response.data});
    })
    .catch(err => {
        alert(err);
    });
  }

    render(){
        return(
            <table>
                <thead> List
                    <tr>
                        <th>ID</th>
                        <th>username</th>
                        <th>image</th>
                        <th>Detail:<p>
                            {this.state.detail.name}
                            </p></th>
                    </tr>
                </thead>
                <tbody>
            {this.state.data.map((item, index)=> {
                return <List key={item.id} {...item}/>;
            })}
                </tbody>
            </table>
        )
    }
}