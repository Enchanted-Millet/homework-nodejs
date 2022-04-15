import { actionTypes } from '../reducers/user';

const allUsersLoaded = users => ({
    type: actionTypes.FETCH_ALL_USERS,
    users
});

const oneUserLoaded = user => ({
    type: actionTypes.FETCH_ONE_USER,
    user
});

const reposLoaded = repos => ({
    type: actionTypes.FETCH_REPOS,
    repos
});

export const fetchAllUsers = () => async (dispatch, getState) => {
    let response = await fetch('https://api.github.com/users?per_page=100');
    response = await response.json();
    dispatch(allUsersLoaded(response));
};

export const fetchOneUser = username => async (dispatch, getState) => {
    let response = await fetch(`https://api.github.com/users/${username}`);
    response = await response.json();
    dispatch(oneUserLoaded(response));
};

export const fetchRepos = username => async (dispatch, getState) => {
    let response = await fetch(`https://api.github.com/users/${username}/repos`);
    response = await response.json();
    dispatch(reposLoaded(response));
};
