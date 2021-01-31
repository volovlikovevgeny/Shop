import { userActionTypes } from './user.types';

export const SetcurrentUser = (user) => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
});
