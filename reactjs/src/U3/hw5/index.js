import React, { Component } from 'react';
import styled from '@emotion/styled';

const COLORS = [
    'antiquewhite',
    'azure',
    'blueviolet',
    'chocolate',
    'cornflowerblue',
    'crimson',
    'dodgerblue',
    'forestgreen',
    'navy'
];

const ComponentsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 1rem;
`;

const SingleContainer = styled.div`
    flex-basis: 30%;
    height: 200px;
    border: 1px solid steelblue;
    padding: 1rem;
    background-color: ${props => props.background};
`;

const Dropdown = ({ components, handleClick, label }) => {
    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {label}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {components.map((component, idx) => {
                    return (
                        <li key={idx}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                className="dropdown-item"
                                onClick={handleClick(idx)}
                            >
                                {component}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const SingleComponent = ({
    idx,
    component,
    handleComponentName,
    background
}) => {
    const handleChange = e => {
        handleComponentName(e.target.value);
    };

    return (
        <SingleContainer background={background}>
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
        </SingleContainer>
    );
};

const ComponentGroup = ({ components, handleComponentName, background }) => {
    return (
        <ComponentsContainer>
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
        </ComponentsContainer>
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

    handleChooseColor = idx => () => {
        const background = [...this.state.background];
        background[this.state.selectedComponent] = COLORS[idx];
        this.setState({ background });
    };

    render() {
        const {
            background,
            components,
            selectedComponent: componentId
        } = this.state;
        return (
            <>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        margin: '1rem'
                    }}
                >
                    <Dropdown
                        label={
                            componentId >= 0
                                ? `${components[componentId]}`
                                : 'Choose component'
                        }
                        components={components}
                        handleClick={this.handleChooseComponent}
                    />
                    <Dropdown
                        label="Choose color"
                        components={COLORS}
                        handleClick={this.handleChooseColor}
                    />
                </div>
                <ComponentGroup
                    components={components}
                    handleComponentName={this.handleComponentName}
                    background={background}
                    selectedComponent={componentId}
                />
            </>
        );
    }
}
