import {ADD_TODO, EDIT_TODO, DELETE_TODO} from './actionTypes'

const initialState = {
    todos: []
}

const todoReducer = (state=initialState, action) => {
    const {type, payload} = action
    let filteredTodos

    switch(type) {
        case ADD_TODO:
            const newTodo = {id: state.todos.length, text: payload, completed: false}
            return {
                todos: [...state.todos, newTodo]
            }
        
        case DELETE_TODO: 
            filteredTodos = state.todos.filter(todo => todo.id !== payload)
            console.log("payload=",payload, filteredTodos)
            return {
                todos: filteredTodos
            }
        
        case EDIT_TODO:
            filteredTodos = state.todos.map(todo => {
                if(todo.id === payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                else return todo
            })
            return {
                todos: [...filteredTodos]
            }
        default: return state
    }
}

export default todoReducer