import { actionTypes } from '../reducers/user'

const fetchUsersLoading = () => {}
const fetchUsersSucceeded = () => {}
const fetchUsersFailed = () => {}
const allUsersLoaded = users => ({
    type: actionTypes.FETCH_ALL_USERS,
    users
})

const oneUserLoaded = user => ({
    type: actionTypes.FETCH_ONE_USER,
    user
})

const reposLoaded = repos => ({
    type: actionTypes.FETCH_REPOS,
    repos
})

export const fetchAllUsers = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUsersLoading())
        try {
            let response = await fetch(
                'https://api.github.com/users?per_page=100'
            )
            response = await response.json()
            dispatch(allUsersLoaded(response))
            dispatch(fetchUsersSucceeded())
        } catch (e) {
            fetchUsersFailed(e)
        }
    }
}

export const fetchOneUser = username => async (dispatch, getState) => {
    let response = await fetch(`https://api.github.com/users/${username}`)
    response = await response.json()
    dispatch(oneUserLoaded(response))
}

export const fetchRepos = username => async (dispatch, getState) => {
    let response = await fetch(`https://api.github.com/users/${username}/repos`)
    response = await response.json()
    dispatch(reposLoaded(response))
}
