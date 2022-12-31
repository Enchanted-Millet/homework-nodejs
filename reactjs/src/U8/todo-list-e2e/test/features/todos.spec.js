import reducer, {
    addTodo,
    toggleTodo,
    toggleTodos
} from '../../features/todos/todosSlice'

describe('todo reducers', () => {
    it('add item', () => {
        const previousState = []
        expect(reducer(previousState, addTodo('first test'))).toEqual([
            { id: 0, text: 'first test', completed: false }
        ])
    })

    it('toggle item', () => {
        const previousState = [{ id: 0, text: 'first test', completed: false }]
        expect(reducer(previousState, toggleTodo(0))).toEqual([
            { id: 0, text: 'first test', completed: true }
        ])
    })

    it('toggle items', () => {
        const previousState = [
            { id: 0, text: 'first test', completed: false },
            { id: 1, text: 'second one', completed: false }
        ]
        expect(reducer(previousState, toggleTodos(true))).toEqual([
            { id: 0, text: 'first test', completed: true },
            { id: 1, text: 'second one', completed: true }
        ])
    })
})
