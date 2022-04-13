import { actionTypes } from '../reducers/todos';

export const addItem = item => ({
    type: actionTypes.ADD_ITEM,
    item
});

export const toggleItem = id => ({
    type: actionTypes.TOGGLE_ITEM,
    id
});

export const toggleItems = status => ({
    type: actionTypes.TOGGLE_ITEMS,
    status
});
