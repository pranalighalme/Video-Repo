
import React,{useState} from 'react';
import {Button,Container,makeStyles, CssBaseline, TextField,
    FormControlLabel, Checkbox, Typography} from '@material-ui/core';
import {Redirect} from 'react-router-dom';

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function VideoContainer() {
  const classes = useStyles();
  const [count, setCount] = useState(false);
  const [username, setUsername]= useState('');
  const [password, setPassword]=useState('');
  console.log("ppp", count,username,password);
  if(count && username==='test' && password==='test@123'){
    return <Redirect to='/video-open' />
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            onChange={u=> setUsername(u.target.value)}
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={e=> setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>setCount(!count)}
          >
            Click to login
          </Button>
        </form>
      </div>
    </Container>
  );
}