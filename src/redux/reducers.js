import { combineReducers } from 'redux';
import Persons from  '../views/person/sw-person-reducer';

const rootReducer = combineReducers({
    PersonsReducer: Persons
});

export default rootReducer;