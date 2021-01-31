import { userActionTypes } from './user.types';

const initialState = {
    currentUser: null,
};

export const userReducer = (state = initialState, action: { type: string; payload: any; }) => {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        default:
            return state;
    }

};

export default userReducer;
