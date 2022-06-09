import React, { Component } from 'react';
import styled from '@emotion/styled';
import List from './List';

let ID = 1;

const Container = styled.div`
    width: 400px;
    margin: auto;
`;

const RemainingBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

    span {
        padding: 7px 0;
    }
`;

const findOneById = (items, id) => {
    return items.find(item => item.id === id);
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            items: []
        };
    }
    handleInputChange = e => {
        this.setState({
            input: e.target.value
        });
    };

    handleKeyDown = e => {
        if (e.keyCode === 13) {
            const newItem = {
                id: ID++,
                name: this.state.input,
                completed: false
            };
            this.setState({ items: [...this.state.items, newItem], input: '' });
        }
    };

    handleCheckItem = id => {
        const items = [...this.state.items];
        //  [{}, {completed: true-> false}, {}...]
        const item = findOneById(items, id);
        // const item = findOneById(this.state.items, id);
        if (item) {
            item.completed = !item.completed;
        }
        console.log(this.state.items);
        this.setState({ items });
        // this.setState({ items: this.state.items });
    };

    handleClearAllCompleted = () => {
        this.setState({
            items: this.state.items.map(item => ({ ...item, completed: false }))
        });
    };

    handleMarkAllDone = () => {
        this.setState({
            items: this.state.items.map(item => ({ ...item, completed: true }))
        });
    };

    render() {
        let { items } = this.state;
        let remain = items.filter(item => !item.completed).length;
        return (
            <Container>
                <h1>Todos - ReactJs</h1>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Type a todo and hit Enter"
                    value={this.state.input}
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyDown}
                />
                <RemainingBox>
                    <span>{remain} remaining</span>
                    <button
                        className="btn btn-outline-secondary"
                        onClick={this.handleClearAllCompleted}
                    >
                        Clear Completed Todos
                    </button>
                </RemainingBox>
                <div>
                    <List
                        items={items}
                        handleCheckItem={this.handleCheckItem}
                        handleMarkAllDone={this.handleMarkAllDone}
                    />
                </div>
            </Container>
        );
    }
}

export default App;
