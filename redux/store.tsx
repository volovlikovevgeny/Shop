import rootReducers from './root-reducer';
import { applyMiddleware, createStore,} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const combinedReducer = rootReducers;

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        if (state.user.userReducer) { nextState.user.userReducer = state.user.userReducer; }
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};

const initStore = () => {
    return createStore(reducer, bindMiddleware([thunk,logger]));
};

export const wrapper = createWrapper(initStore);
