import React from 'react'

const {Provider, Consumer} = React.createContext()

class TodoContextProvider extends React.Component {
    state = {
        todos: []
    }

    componentDidMount() {
        console.log("called")
        if(localStorage.getItem("todos")) {
            this.setState({
                todos: [...JSON.parse(localStorage.getItem("todos"))]
            })
        }
    }

    addTodo = (text) => {
        const localTodos = localStorage.getItem("todos")
        let todos = []
        if(!localTodos) {
            todos = this.state.todos
        }
        else {
            todos = JSON.parse(localTodos)
        }
        const updatedTodos = [...todos, {id: todos.length, text: text, completed: false}]
        this.setState({
            todos: updatedTodos
        })
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
    }

    editTodo = (id) => {
        const localTodos = localStorage.getItem("todos")
        let todos = []
        if(!localTodos) {
            todos = this.state.todos
        }
        else {
            todos = JSON.parse(localTodos)
        }

        const updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            else return todo
        })
        this.setState({
            todos: updatedTodos
        })
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
    }

    deleteTodo = (id) => {
        const localTodos = localStorage.getItem("todos")
        let todos = []
        if(!localTodos) {
            todos = this.state.todos
        }
        else {
            todos = JSON.parse(localTodos)
        }

        const filteredTodos = todos.filter(todo => todo.id !== id)
        this.setState({
            todos: filteredTodos
        })
        localStorage.setItem("todos", JSON.stringify(filteredTodos))
    }
    
    render() {
        const {todos} = this.state
        return (
            <Provider value={{todos, addTodo: this.addTodo, editTodo: this.editTodo, deleteTodo: this.deleteTodo}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {TodoContextProvider, Consumer as TodoContextConsumer}