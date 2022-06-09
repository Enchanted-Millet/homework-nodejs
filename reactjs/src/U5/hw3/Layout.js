import React, { useState } from 'react'
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'
import Dropdown from './Dropdown'
import SingleComponent from './SingleComponent'

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
]

export default function Layout() {
    const [background, setBackground] = useState([
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff'
    ])
    const [components, setComponents] = useState([
        'first',
        'second',
        'third',
        'fourth',
        'fifth',
        'sixth'
    ])

    const location = useLocation()
    const { pathname } = location
    const componentId =
        pathname.split('/')[1].trim() === ''
            ? -1
            : +pathname.split('/')[1].trim()

    const handleComponentName = (idx, value) => {
        setComponents(components => [
            ...components.slice(0, idx),
            value,
            ...components.slice(idx + 1)
        ])
    }

    const handleChooseColor = idx => () => {
        setBackground(background => [
            ...background.slice(0, componentId),
            COLORS[idx],
            ...background.slice(componentId + 1)
        ])
    }

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
                    type="component"
                />
                <Dropdown
                    label="Choose color"
                    components={COLORS}
                    handleClick={handleChooseColor}
                    type="color"
                />
            </div>

            <Routes>
                <Route
                    path="/:componentId"
                    element={
                        <SingleComponent
                            componentsName={components}
                            handleComponentName={handleComponentName}
                            background={background}
                        />
                    }
                />
            </Routes>
        </>
    )
}
