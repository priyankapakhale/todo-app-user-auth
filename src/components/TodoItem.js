import React from 'react'
import {
    ListItem,
    Checkbox,
    IconButton,
    ListItemText,
    ListItemSecondaryAction
  } from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

function TodoItem(props) {
    return (
        <ListItem divider={props.divider}>
            <Checkbox
                onClick={props.onCheckBoxToggle}
                checked={props.completed}
                disableRipple
            />
            <ListItemText primary={props.text} />
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" onClick={props.onButtonClick}>
                <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default TodoItem;
  
