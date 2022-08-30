import reducer, {
    changeFilter,
    resetFilter
} from '../../features/filters/filtersSlice'

describe('filter reducer', () => {
    it('change filter option', () => {
        const previousState = {}
        expect(reducer(previousState, changeFilter('red'))).toEqual({
            color: 'red'
        })
    })

    it('reset filter', () => {
        const previousState = { color: 'blue' }
        expect(reducer(previousState, resetFilter())).toEqual({
            color: ''
        })
    })
})
