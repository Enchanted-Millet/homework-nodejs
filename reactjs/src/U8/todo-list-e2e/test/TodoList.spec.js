import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import render from '../utils/test-utils'
import '@testing-library/jest-dom'
import TodoList from '../index'

describe('Todo List', () => {
    it('render as expected', () => {
        render(<TodoList />)
        expect(screen.getByTestId('todo-container')).toBeInTheDocument()
    })

    it('change input', () => {
        render(<TodoList />)
        const inputComponent = screen.getByTestId('todo-input')
        fireEvent.change(inputComponent, { target: { value: 'first' } })
        fireEvent.keyDown(inputComponent, { keyCode: 13 })
        expect(screen.getByText(/3 remaining/)).toBeTruthy()

        fireEvent.change(inputComponent, { target: { value: 'second' } })
        fireEvent.keyDown(inputComponent, { keyCode: 14 })
        expect(screen.getByText(/3 remaining/)).toBeTruthy()
    })

    it('toggle todo item', () => {
        render(<TodoList />)
        const inputComponent = screen.getByTestId('todo-input')
        fireEvent.change(inputComponent, { target: { value: 'first' } })
        fireEvent.keyDown(inputComponent, { keyCode: 13 })

        const item = screen.getByText(/first/)
        fireEvent.click(item)
        expect(screen.getByText(/2 remaining/)).toBeTruthy()
    })

    it('toggle all mark done & clear completed', () => {
        render(<TodoList />)

        fireEvent.click(screen.getByTestId('all-mark-done'))
        expect(screen.getByText(/0 remaining/)).toBeTruthy()

        fireEvent.click(screen.getByTestId('clear-completed'))
        expect(screen.getByText(/3 remaining/)).toBeTruthy()
    })

    it('filter todos', () => {
        render(<TodoList />)
        fireEvent.click(screen.getByTestId('filter-dropdown'))
        fireEvent.click(screen.getByTestId('red'))
        expect(screen.getByText(/1 remaining/)).toBeTruthy()
    })

    it('reset filter', () => {
        render(<TodoList />, { preloadedState: { filters: { color: 'red' } } })
        fireEvent.click(screen.getByTestId('reset-filter'))
        expect(screen.getByText(/2 remaining/)).toBeTruthy()
    })
})
