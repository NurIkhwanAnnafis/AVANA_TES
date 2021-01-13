import data from '../../helpers/dummy.json';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export const SELECTED_MENU = 'SELECTED_MENU';

export function fetchData(){
    return dispatch => {
        dispatch({ type: FETCH_DATA_REQUEST });
        dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    }
}

export function selectMenu(data) {
    return dispatch => {
      dispatch({ type: SELECTED_MENU, payload: data });
    };
}

