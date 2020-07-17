import React, {useState} from 'react'
import { TextField, FormControlLabel, Checkbox, Button, Link, Grid, Container, CssBaseline, Typography} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import {Redirect} from 'react-router-dom'
import {UserContextConsumer} from '../context/userContext'

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] =  useState("")
    const [rememberMe, setRememberMe] = useState(false)

    const classes = useStyles();

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    } 

    const handleFirstNameChange = e => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = e => {
        setLastName(e.target.value)
    }

    const handleRememberMeChange = e => {
        setRememberMe(!rememberMe)
    }
    
    return (
      <UserContextConsumer>
        {
          ({isAuthenticated, register, errors}) => {
            return isAuthenticated ? <Redirect to="/" /> : (
              <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form className={classes.form} noValidate onSubmit={
                e => { 
                  e.preventDefault()
                  register({firstName, lastName, email, password}, rememberMe)
                }
                  
              }>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      value={firstName}
                      onChange={handleFirstNameChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                      value={lastName}
                      onChange={handleLastNameChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={handleEmailChange}
                      error={errors.length > 0}
                      helperText={errors.length > 0 ? errors[0] : ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" name="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />}
                      label="Remember me?"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
          )}
        }
      </UserContextConsumer>
    )
}


export default Register


