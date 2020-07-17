import {LOGIN, LOGOUT, REGISTER} from '../reducers/actionTypes'

export const login = (user, rememberMe) => {
    return {
        type: LOGIN,
        payload: {user, rememberMe}
    }
}

export const register = (user, rememberMe) => {
    return {
        type: REGISTER,
        payload: {user, rememberMe}
    }
}

export const logout = (user) => {
    return {
        type: LOGOUT,
        payload: user
    }
}