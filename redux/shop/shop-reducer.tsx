import { shopActionTypes } from './shop.types';

const initialState = {
    collection: [],
};

const shopReducer = (state = initialState, action: { type: string; payload: any; }) => {
    switch (action.type) {
        case shopActionTypes.FETCH_SHOP_DATA:
            return {
                ...state,
                collection: action.payload,
            };
        default:
            return state;
    }
};

export default shopReducer;

