import React from 'react'

const {Provider, Consumer} = React.createContext()

class TodoContextProvider extends React.Component {
    state = {
        todos: []
    }

    addTodo = (text) => {
        this.setState(prevState => ({
            todos: [...prevState.todos, {id: prevState.todos.length, text: text, completed: false}]
        }))
        
    }

    editTodo = (id) => {
        const updatedTodos = this.state.todos.map(todo => {
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
    }

    deleteTodo = (id) => {
        const filteredTodos = this.state.todos.filter(todo => todo.id !== id)
        this.setState({
            todos: filteredTodos
        })
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