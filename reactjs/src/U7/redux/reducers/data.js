export const initialState = {
    fromJson: {},
    fromXml: {}
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case 'getJSON':
            return state;
        case 'getXML':
            return state;
        default:
            return state;
    }
}
