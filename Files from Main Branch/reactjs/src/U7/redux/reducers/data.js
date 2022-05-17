export const FETCH_STATUS = {
    INITIAL: 'INITIAL',
    PROCESSING: 'PROCESSING',
    SUCCESSFUL: 'SUCCESSFUL',
    FAILED: 'FAILED'
};

export const initialState = {
    fromJson: {},
    fromXml: {},
    combined: [],
    dataFetchStatus: FETCH_STATUS.INITIAL
};

export const actionTypes = {
    FETCH_JSON: 'FETCH_JSON',
    FETCH_XML: 'FETCH_XML',
    DATA_LOADING: 'DATA_LOADING',
    COMBINE_DATA: 'COMBINE_DATA'
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_JSON:
            return { ...state, fromJson: action.payload };
        case actionTypes.FETCH_XML:
            return { ...state, fromXml: action.payload };
        case actionTypes.COMBINE_DATA:
            return { ...state, combined: action.payload };
        case actionTypes.DATA_LOADING:
            return {
                ...state,
                dataFetchStatus: action.status
            };
        default:
            return state;
    }
}
