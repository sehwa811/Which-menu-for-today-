import { combineReducers } from 'redux';
import { reducer } from './selected/reducer';


export const rootReducer = combineReducers({
    selected: reducer,
})