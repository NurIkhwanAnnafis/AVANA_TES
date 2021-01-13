import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR,
    SELECTED_MENU
} from '../actions/app.action';

const initState = {
    isLoading: false,
    selected: null,
    listMenu: [],
};

export default function appReduce(state = initState, action) {
    switch (action.type) {
        case SELECTED_MENU:
            return {
                ...state,
                selected: action.payload
            };

        case FETCH_DATA_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listMenu: action.payload
            }

        case FETCH_DATA_ERROR:
            return {
                ...state,
                isLoading: false
            }

        default:
            return state;
    }
}
