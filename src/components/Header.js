import React from 'react'
import { AppBar, Toolbar, Typography} from "@material-ui/core";

function Header() {
    return (
        <AppBar color="primary" position="static" style={{ height: 64 }}>
            <Toolbar style={{ height: 64 }}>
                <Typography color="inherit">TODO APP</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header