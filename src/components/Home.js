import React from 'react'
import Header from './Header'
import { Paper} from "@material-ui/core";
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import { useInputValue} from "../customHooks";
import { TodoContextConsumer } from '../context/todoContext';

function Home(props) {
    const { inputValue, changeInput, clearInput} = useInputValue();

    return (
        <TodoContextConsumer>
            {
                ({todos, addTodo}) => {
                    return (
                        <Paper
                            elevation={0}
                            style={{ padding: 0, margin: 0, backgroundColor: "#fafafa" }}
                            >
                            <Header />
                            <AddTodo
                                inputValue={inputValue}
                                onInputChange={changeInput}
                                onButtonClick={() => {
                                    clearInput()
                                    addTodo(inputValue)
                                }}
                            />
                            <TodoList todos={todos} />
                            
                        </Paper>
                )}
            }
        </TodoContextConsumer>
                    
    )
}

export default Home