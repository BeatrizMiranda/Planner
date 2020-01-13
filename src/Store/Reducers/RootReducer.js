import authReducer from "./AuthReducer";
import projectReducer from "./ProjectReducer";
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default RootReducer;