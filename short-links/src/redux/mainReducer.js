import { mainAPI } from "../api/api";

const SET_ITEM = 'SET_ITEM';
const SET_LINKS = 'SET_LINKS';

let initialState = {
    links: []
};

const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ITEM: 
            return {
                ...state,
                links: [action.item, ...state.links]
            }
        case SET_LINKS: 
            return {
                ...state,
                links: [...state.links, ...action.data]
            }
        default:
            return state;
    }
}

export const setItem = (item) => {
    return {
        type: SET_ITEM,
        item
    }
}

export const setLinks = (data) => {
    return {
        type: SET_LINKS,
        data
    }
}

export const getLinks = () => {
    return (dispatch) => {
        return mainAPI.getLinks().then(response => {
            dispatch(setLinks(response.data))
        })
        .catch (err => {
            console.log(err)
        })
    }
}

export const doNewItem = (link) => {
    return (dispatch) => {
        return mainAPI.doShortLink(link).then(response => {
            console.log(response.data)
            dispatch(setItem(response.data))
        })
        .catch (err => {
            console.log(err)
        })
    }
}

export default mainReducer;