export const initialState = [];

export const actionTypes = {
    ADD_ITEM: 'ADD_ITEM',
    TOGGLE_ITEM: 'TOGGLE_ITEM',
    TOGGLE_ITEMS: 'TOGGLE_ITEMS'
};

let ID = 1;

export default function todos(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return [...state, { ...action.item, id: ID++ }];

        case actionTypes.TOGGLE_ITEM:
            const items = [...state];
            let item = items.find(one => one.id === action.id);
            item.completed = !item.completed;
            return items;

        case actionTypes.TOGGLE_ITEMS:
            return state.map(item => {
                item.completed = action.status;
                return item;
            });
        default:
            return state;
    }
}
