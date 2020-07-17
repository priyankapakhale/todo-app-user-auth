import React from 'react'
import TodoItem from './TodoItem'
import { Paper, List} from "@material-ui/core";
import {TodoContextConsumer} from '../context/todoContext'

function TodoList({todos}) {
    return (
        <TodoContextConsumer>
            {
                ({editTodo, deleteTodo}) => (
                    <>
                        {todos.length > 0 && (
                        <Paper style={{ margin: 16 }}>
                            <List style={{ overflow: "scroll" }}>
                            {todos.map((todo, idx) => (
                                <TodoItem
                                {...todo}
                                key={`TodoItem.${idx}`}
                                divider={idx !== todos.length - 1}
                                onButtonClick={() => deleteTodo(todo.id)}
                                onCheckBoxToggle={() => editTodo(todo.id)}
                                />
                            ))}
                            </List>
                        </Paper>
                        )}
                    </>
                )
            }
        </TodoContextConsumer>
    )
}

export default TodoList