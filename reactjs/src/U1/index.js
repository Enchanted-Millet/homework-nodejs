import React, { Component } from 'react';
import Table from './hw1/Table';
import SimpleLayout from './hw1/Layout1';
import ScreenLayout from './hw1/Layout2';
import Counter from './hw2/Counter';
import Timer from './hw3/Timer';
import Conversion from './hw4/Conversion';

// This is for hw 1
const data = [
    [' ', 'Knocky', 'Flor', 'Ella'],
    ['Breed', 'Jack Russell', 'Poodle', 'Streetdog'],
    ['Age', 16, 9, 10],
    ['Owner', 'Mother-in-low', 'Me', 'Me']
];

class App extends Component {
    render() {
        // hw 1
        // return <Table data={data} />;
        // hw 1.2
        // return <SimpleLayout />;
        // hw 1.3
        // return <ScreenLayout />;
        // hw 2
        // return <Counter />;
        // hw 3
        // return <Timer />;
        // hw 4
        return <Conversion />;
    }
}

export default App;
