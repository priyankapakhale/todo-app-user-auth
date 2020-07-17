import React from 'react'
import { Paper, Grid, Button, TextField} from "@material-ui/core";

function AddTodo(props) {
    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
                <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
                    <TextField
                    placeholder="Add Todo here"
                    value={props.inputValue}
                    onChange={props.onInputChange}
                    onKeyPress={props.onInputKeyPress}
                    fullWidth
                    />
            </Grid>
            <Grid xs={2} md={1} item>
                <Button
                fullWidth
                color="secondary"
                variant="outlined"
                onClick={props.onButtonClick}
                >
                Add
                </Button>
            </Grid>
            </Grid>
        </Paper>
    )
}

export default AddTodo