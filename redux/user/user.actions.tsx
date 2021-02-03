import {AnyAction } from 'redux';
import { userActionTypes } from './user.types';

export const setCurrentUser = (user: null): AnyAction => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
});
