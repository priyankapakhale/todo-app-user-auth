import {combineReducers} from 'redux'
import userReducer from './userReducer'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
    userState: userReducer,
    todoState: todoReducer
})

export default rootReducer