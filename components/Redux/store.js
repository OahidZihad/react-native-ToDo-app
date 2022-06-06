import {createStore, combineReducers, applymiddleware} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers';

const rootReducer = combineReducers({userReducer});

export const Store = createStore(rootReducer, applymiddleware(thunk));
