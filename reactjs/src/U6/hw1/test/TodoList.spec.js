import React from 'react';
import { render, fireEvent, screen } from '../test-utils';
import '@testing-library/jest-dom';
import TodoList from '..';
import { initialState } from '../redux/reducers/todos';

describe('Todo List', () => {
    const setup = (state = initialState) => render(<TodoList />, { initialState: state });

    it('render as expected', () => {
        setup();
        expect(screen.getByTestId('todo-container')).toBeInTheDocument();
    });

    it('change input', () => {
        setup();
        const inputComponent = screen.getByTestId('todo-input');
        fireEvent.change(inputComponent, { target: { value: 'first' } });
        fireEvent.keyDown(inputComponent, { keyCode: 13 });
        expect(screen.getByText(/1 remaining/)).toBeTruthy();

        fireEvent.change(inputComponent, { target: { value: 'second' } });
        fireEvent.keyDown(inputComponent, { keyCode: 14 });
        expect(screen.getByText(/1 remaining/)).toBeTruthy();
    });

    it('toggle todo item', () => {
        setup();
        const inputComponent = screen.getByTestId('todo-input');
        fireEvent.change(inputComponent, { target: { value: 'first' } });
        fireEvent.keyDown(inputComponent, { keyCode: 13 });

        const item = screen.getByText(/first/);
        fireEvent.click(item);
        expect(screen.getByText(/0 remaining/)).toBeTruthy();
    });

    it('toggle all mark done & clear completed', () => {
        setup();
        const inputComponent = screen.getByTestId('todo-input');
        fireEvent.change(inputComponent, { target: { value: 'first' } });
        fireEvent.keyDown(inputComponent, { keyCode: 13 });
        fireEvent.change(inputComponent, { target: { value: 'second' } });
        fireEvent.keyDown(inputComponent, { keyCode: 13 });

        fireEvent.click(screen.getByTestId('all-mark-done'));
        expect(screen.getByText(/0 remaining/)).toBeTruthy();

        fireEvent.click(screen.getByTestId('clear-completed'));
        expect(screen.getByText(/2 remaining/)).toBeTruthy();
    });
});
