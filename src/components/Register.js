import React, {useState, useEffect} from 'react'
import { TextField, FormControlLabel, Checkbox, Button, Link, Grid, Container, CssBaseline, Typography} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux'
import {register} from '../redux/actions/userActions'
import {Redirect} from 'react-router-dom'

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
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function Register(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] =  useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [success, setSuccess] = useState(false)
    const local = JSON.parse(localStorage.getItem("userState"))

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

    const handleSubmit = e => {
      e.preventDefault()
      props.register({firstName, lastName, email, password}, rememberMe)
      console.log(props)
      if(props.errors.length === 0) {
        setSuccess(true)
      }
      else{
        alert(props.errors)
      }
    }

    return (success || JSON.parse(localStorage.getItem("userState")) || props.userState.session !== null) ? <Redirect to="/" /> : (
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
    )
}

const mapStateToProps = storeState => {
  return {
    users: storeState.userState.users,
    errors: storeState.userState.errors,
    userState: storeState.userState
  }
}

export default connect(mapStateToProps, {register})(Register)


