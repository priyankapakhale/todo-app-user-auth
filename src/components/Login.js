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
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const classes = useStyles();

  const handleEmailChange = e => {
      setEmail(e.target.value)
  }

  const handlePasswordChange = e => {
      setPassword(e.target.value)
  } 

  const handleRememberMeChange = e => {
      setRememberMe(!rememberMe)
  }

  return (
    <UserContextConsumer>
      {
        ({isAuthenticated, login, errors}) => {
          console.log(errors)
            return (isAuthenticated) ? <Redirect to="/" /> : (
              <Container component="main" maxWidth="xs">
                      <CssBaseline />
                      <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                          Login
                        </Typography>
                        <form className={classes.form} noValidate onSubmit={e => { 
                          e.preventDefault()
                          login({email, password}, rememberMe)
                          }}>
                          <Grid container spacing={2}>
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
                            Login
                          </Button>
                          <Grid container justify="flex-end">
                            <Grid item>
                              <Link href="/register" variant="body2">
                                Don't have an account yet? Sign up here
                              </Link>
                            </Grid>
                          </Grid>
                        </form>
                      </div>
                    </Container>
                )
          }
      }
    </UserContextConsumer>
  )
  
}


export default Login


