export const initialState = {
    allUsers: [],
    currentUser: {},
    repos: []
};

export const actionTypes = {
    FETCH_ALL_USERS: 'FETCH_ALL_USERS',
    FETCH_ONE_USER: 'FETCH_ONE_USER',
    FETCH_REPOS: 'FETCH_REPOS'
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_ALL_USERS:
            return { ...state, allUsers: action.users };
        case actionTypes.FETCH_ONE_USER:
            return { ...state, currentUser: action.user };
        case actionTypes.FETCH_REPOS:
            return { ...state, repos: action.repos };

        default:
            return state;
    }
}
