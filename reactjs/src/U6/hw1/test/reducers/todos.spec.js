import todosReducer, { actionTypes } from '../../redux/reducers/todos'

describe('todo reducers', () => {
    it('add item', () => {
        const state = todosReducer(undefined, {
            type: actionTypes.ADD_ITEM,
            item: { name: 'first', completed: false }
        })
        expect(state.length).toBe(2)
    })
})
