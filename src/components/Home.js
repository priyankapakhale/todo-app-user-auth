import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Paper} from "@material-ui/core";
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import { useInputValue} from "../customHooks";
import {connect} from 'react-redux'
import {addTodo, editTodo, deleteTodo} from '../redux/actions/todoActions'
import {Redirect} from 'react-router-dom'

function Home(props) {
    const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
    const local = JSON.parse(localStorage.getItem("userState"))

    const clearInputAndAddTodo = _ => {
        clearInput();
        props.addTodo(inputValue)
      };

    return !(JSON.parse(localStorage.getItem("userState")) || props.userState.session !== null) ? <Redirect to="/login" /> : (
        <Paper
            elevation={0}
            style={{ padding: 0, margin: 0, backgroundColor: "#fafafa" }}
        >
            <Header />
            <AddTodo
                inputValue={inputValue}
                onInputChange={changeInput}
                onButtonClick={clearInputAndAddTodo}
                onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
            />
            <TodoList
                items={props.todos}
                onItemCheck={id => props.editTodo(id)}
                onItemRemove={id => props.deleteTodo(id)}
            />
        </Paper>
    )
}

const mapStateToProps = storeState => {
    return {
        todos: storeState.todoState.todos,
        userState: storeState.userState
    }
}

export default connect(mapStateToProps, {addTodo, editTodo, deleteTodo})(Home)