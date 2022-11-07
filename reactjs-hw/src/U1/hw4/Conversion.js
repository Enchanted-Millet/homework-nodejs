import React, { Component } from 'react';

const conversion = num => {
    if (num === 0) {
        return '0'
    } else if (num > 10 && num < 20) {
        return '' + num + 'th'
    } else if(num % 10 === 1) {
        return num + 'st'   
    } else if(num % 10 === 2) {
        return num + 'nd'
    } else if(num % 10 === 3) {
        return num + 'rd'
    } else {
        return num + 'th'
    }
}


class Conversion extends Component {
    constructor(props) {
            super(props);
            this.state = { inputValue: '', conversedValue: ''}
    }

    handleChange = e => {
        this.setState({ inputValue: e.target.value })
    }

    handleConversion = () => {
        const inputValue = +this.state.inputValue
        if (Number.isInteger(inputValue)) {
            this.setState({ conversedValue: conversion(inputValue) })
        } else {
            this.setState({ conversedValue: this.state.inputValue })
        }
    }

    render() {
        return (
            <div>
                <label for="original">Original:</label>
                <br/>
                <input 
                    name="original"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <button name="convert" onClick={this.handleConversion}>Convert</button>
                <br/>
                <label for="filter">Original Filter:</label>
                <br/>
                <input 
                    name="filter"
                    value={this.state.conversedValue}
                    readOnly
                />
            </div>
        );
    }
}

export default Conversion;
