import authReducer from "./AuthReducer";
import projectReducer from "./ProjectReducer";
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const RootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer
})

export default RootReducer;