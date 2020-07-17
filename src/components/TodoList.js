import React from 'react'
import TodoItem from './TodoItem'
import { Paper, List} from "@material-ui/core";

function TodoList(props) {
    return (
        <>
            {props.items.length > 0 && (
            <Paper style={{ margin: 16 }}>
                <List style={{ overflow: "scroll" }}>
                {props.items.map((todo, idx) => (
                    <TodoItem
                    {...todo}
                    key={`TodoItem.${idx}`}
                    divider={idx !== props.items.length - 1}
                    onButtonClick={() => props.onItemRemove(todo.id)}
                    onCheckBoxToggle={() => props.onItemCheck(todo.id)}
                    />
                ))}
                </List>
            </Paper>
            )}
        </>
    )
}

export default TodoList