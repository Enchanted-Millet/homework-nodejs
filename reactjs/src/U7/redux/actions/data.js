import { actionTypes, FETCH_STATUS } from '../reducers/data';

const jsonDataLoaded = payload => ({
    type: actionTypes.FETCH_JSON,
    payload
});

const xmlDataLoaded = payload => ({
    type: actionTypes.FETCH_XML,
    payload
});

const combineData = payload => ({
    type: actionTypes.COMBINE_DATA,
    payload
});

const setLoading = status => ({
    type: actionTypes.DATA_LOADING,
    status
});

export const fetchJson = () => async (dispatch, getState) => {
    try {
        let response = await fetch('/getJson');
        response = await response.json();
        return dispatch(jsonDataLoaded(response));
    } catch (e) {
        return Promise.reject(e.message);
    }
};

export const fetchXml = () => async (dispatch, getState) => {
    try {
        let response = await fetch('/getXml');
        response = await response.json();
        return dispatch(xmlDataLoaded(response));
    } catch (e) {
        return Promise.reject(e.message);
    }
};

export const combineJsonAndXml = () => async (dispatch, getState) => {
    dispatch(setLoading(FETCH_STATUS.PROCESSING));
    Promise.all([dispatch(fetchJson()), dispatch(fetchXml())])
        .then(() => {
            const { fromJson, fromXml } = getState().hw5 || {};
            const result = [];
            const [lengthPJ, lengthPX] = [
                fromJson.person?.length,
                fromXml.person?.length
            ];
            let pj = 0,
                px = 0;
            while (pj < lengthPJ && px < lengthPX) {
                if (fromJson.person[pj].id < fromXml.person[px].id) {
                    result.push(fromJson.person[pj++]);
                } else {
                    result.push(fromXml.person[px++]);
                }
            }

            if (pj < lengthPJ) {
                result.push(...fromJson.person.slice(pj));
            } else if (px < lengthPX) {
                result.push(...fromXml.person.slice(px));
            }

            dispatch(combineData(result));
            dispatch(setLoading(FETCH_STATUS.SUCCESSFUL));
        })
        .catch(e => {
            dispatch(setLoading(FETCH_STATUS.FAILED));
        });
};
