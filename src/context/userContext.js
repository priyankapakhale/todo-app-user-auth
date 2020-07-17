import React from 'react'

const {Provider, Consumer} = React.createContext()

class UserContextProvider extends React.Component {
    state = {
        isAuthenticated: false,
        users: [],
        errors: []
    }

    componentDidMount() {
        if(localStorage.getItem("session")) {
            this.changeAuthenticated() 
          }
    }

    changeAuthenticated = () => {
        this.setState(prevState => ({
            ...prevState,
            isAuthenticated: true
        }))
    }

    login = ({email, password}, rememberMe) => {
        const filteredUsers = this.state.users.filter(user => user.email === email && user.password === password) 
        let errors = []
        let users = []
        const localUsers = localStorage.getItem("users")
        if(localUsers !== undefined) {
            users = JSON.parse(localUsers).filter(user => user.email === email)
        }

        if(filteredUsers.length === 0 && users.length ===0) {
            errors.push("Email & Password don't match")
            this.setState(prevState => ({
                ...prevState,
                errors: errors
            }))
        }
        else {
            this.setState(prevState => ({
                ...prevState,
                isAuthenticated: true
            }))

            if(rememberMe) {
                localStorage.setItem("session", email)
            }
        }
    }

    register = ({firstName, lastName, email, password}, rememberMe) => {
        let errors = []
        const filteredUsers = this.state.users.filter(user => user.email === email)
        const localUsers = localStorage.getItem("users")
        let users = []
        if(localUsers) {
            users = JSON.parse(localUsers).filter(user => user.email === email)
        }

        if(filteredUsers.length > 0 || users.length > 0) {
            errors.push("Email already exists")
            this.setState(prevState => ({
                ...prevState,
                errors: errors
            }))
        }
        else {
            const newState = [...this.state.users, {firstName, lastName, email, password}]
            localStorage.setItem("users", JSON.stringify(newState))
            this.setState(prevState => ({
                ...prevState,
                isAuthenticated: true,
                users: [...prevState.users, {firstName, lastName, email, password}]
            }))
            if(rememberMe) {
                localStorage.setItem("session", email)
            }
            
        }
    }
    
    render() {
        const {isAuthenticated, users, errors} = this.state
        return (
            <Provider value={{isAuthenticated, users, changeAuthenticated: this.changeAuthenticated, login: this.login, register: this.register, errors}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UserContextProvider, Consumer as UserContextConsumer}