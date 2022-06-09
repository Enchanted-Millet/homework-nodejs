import React, { Component } from 'react';

const conversion = num => {
    if (num === 0) {
        return '' + num;
    }
    if (num > 10 && num < 20) {
        return '' + num + 'th';
    }
    switch (num % 10) {
        case 1:
            return num + 'st';
        case 2:
            return num + 'nd';
        case 3:
            return num + 'rd';
        default:
            return num + 'th';
    }
};

export default class Conversion extends Component {
    state = { inputValue: '', conversedValue: '' };

    handleChange = e => {
        this.setState({ inputValue: e.target.value });
    };

    handleConversion = e => {
        if (e.keyCode === 13) {
            const originalValue = +this.state.inputValue;
            if (Number.isInteger(originalValue)) {
                this.setState({ conversedValue: conversion(originalValue) });
            } else {
                this.setState({ conversedValue: this.state.inputValue });
            }
        }
    };

    render() {
        let { inputValue, conversedValue } = this.state;
        return (
            <div className="input-group">
                <span className="input-group-text">Provide your input</span>
                <input
                    type="text"
                    aria-label="original input"
                    className="form-control"
                    onChange={this.handleChange}
                    onKeyDown={this.handleConversion}
                    value={inputValue}
                />
                <input
                    type="text"
                    aria-label="conversed output"
                    className="form-control"
                    readOnly
                    value={conversedValue}
                />
            </div>
        );
    }
}
