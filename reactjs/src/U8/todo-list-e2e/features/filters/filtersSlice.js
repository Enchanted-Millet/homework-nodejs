import { createSlice } from '@reduxjs/toolkit'

export const Colors = {
    red: 'red',
    green: 'green',
    blue: 'blue',
    yellow: 'yellow',
    purple: 'purple',
    cyan: 'cyan',
    magenta: 'magenta',
    grey: 'grey'
}

const initialState = {
    color: ''
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.color = action.payload
        },
        resetFilter: () => initialState
    }
})

export const { changeFilter, resetFilter } = filterSlice.actions

export default filterSlice.reducer
