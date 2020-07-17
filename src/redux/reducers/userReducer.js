import {LOGOUT, LOGIN, REGISTER} from './actionTypes'

const initialState = {
    users: [],
    errors: [],
    session: null
}

const userReducer = (state=initialState, action) => {
    let {type, payload} = action
    let filteredUsers
    let errors = []
    let newState, rememberMe
    switch(type) {
        case LOGIN:
            //check if email and password matches
            rememberMe = payload[1]
            payload = payload[0]
            filteredUsers = state.users.filter(user => user.email === payload.email && user.password === payload.password)
            if(filteredUsers.length === 0) {
                errors.push("Email & Password don't match")
            }
            else {
                //if remember me checked -> add to localstorage
                if(rememberMe) {
                    newState = {
                        ...state,
                        session: payload.email
                    }
                }
                else {
                    newState = state
                }
                
                localStorage.setItem("userState", JSON.stringify(newState))
                return newState
            }
            newState = {
                ...state,
                errors: errors
            }
            localStorage.setItem("userState", JSON.stringify(newState))
            return newState
        
        case REGISTER: 
            //check if email already exists
            const {user, rememberMe} = payload
            payload = user
            console.log("here",payload, rememberMe)

            filteredUsers = state.users.filter(user => user.email === payload.email)
            if(filteredUsers.length > 0) {
                errors.push("Email already exists")
            }
            else {
                //if remember me is checked
                if(rememberMe) {
                    newState =  {
                        users: [...state.users, {...payload, id: state.users.length}],
                        errors: [],
                        session: payload.email
                    }
                }
                else {
                    newState =  {
                        users: [...state.users, {...payload, id: state.users.length}],
                        errors: [],
                        session: null
                    }
                }
                localStorage.setItem("userState", JSON.stringify(newState))
                return newState
            }
            newState = {
                ...state,
                errors: errors
            }
            localStorage.setItem("userState", JSON.stringify(newState))
            return newState
            
        default: return state
    }
}

export default userReducer