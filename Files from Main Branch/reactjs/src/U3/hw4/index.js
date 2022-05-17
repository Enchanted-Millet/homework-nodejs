/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { GithubPicker } from 'react-color';
import './style.css';

const Dropdown = ({ components, handleClick }) => {
    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Choose a component
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {components.map((component, idx) => {
                    return (
                        <li key={idx}>
                            <a href="#" className="dropdown-item" onClick={handleClick(idx)}>
                                {component}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const SingleComponent = ({ idx, component, handleComponentName, background }) => {
    const handleChange = e => {
        handleComponentName(e.target.value);
    };

    return (
        <div className="component-single" style={{ backgroundColor: background }}>
            <label htmlFor={`${component - idx}`} className="form-label">
                Component name:
            </label>
            <input
                type="text"
                id={`${component - idx}`}
                className="form-control"
                onChange={handleChange}
                value={component}
            />
        </div>
    );
};

const ComponentGroup = ({ components, handleComponentName, background, selectedComponent }) => {
    return (
        <div className="component-group">
            {components.map((component, idx) => {
                return (
                    <SingleComponent
                        key={idx}
                        idx={idx}
                        component={component}
                        background={background[idx]}
                        handleComponentName={handleComponentName(idx)}
                    />
                );
            })}
        </div>
    );
};

export default class ColorComponents extends Component {
    state = {
        background: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
        components: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'],
        selectedComponent: -1
    };

    handleChangeComplete = color => {
        const selectedIdx = this.state.selectedComponent;
        if (selectedIdx >= 0) {
            const { background } = this.state;
            background[selectedIdx] = color.hex;
            this.setState({ background });
        }
    };

    handleComponentName = idx => value => {
        const components = [...this.state.components];
        components[idx] = value;
        this.setState({ components });
    };

    handleChooseComponent = idx => () => {
        this.setState({ selectedComponent: idx });
    };

    render() {
        return (
            <div>
                <Dropdown components={this.state.components} handleClick={this.handleChooseComponent} />
                <GithubPicker
                    color={this.state.background}
                    onChangeComplete={this.handleChangeComplete}
                    triangle="hide"
                />
                <ComponentGroup
                    components={this.state.components}
                    handleComponentName={this.handleComponentName}
                    background={this.state.background}
                    selectedComponent={this.state.selectedComponent}
                />
            </div>
        );
    }
}
