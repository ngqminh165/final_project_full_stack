/*import React, {useState} from "react"
import "./App.css"
import axios from 'axios';
import Form from 'react-bootstrap/Form'

export default function CreateForm({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    /*const handleSubmit = async e => {
        console.log(localStorage.getItem('JWT'));

        e.preventDefault();
        console.log(username);
        const token = await axios.post( 'http://localhost:1337/auth/local', {
            "identifier": username,
            "password": password
        });
        localStorage.setItem('JWT', token.data.jwt);
        console.log(token)
      }
    
    const handleUsername = () => {
        console.log("haha")
    }
    return(
    <Form noValidate onSubmit={handleSubmit}>
      <div id="createform">
        <FormHeader title="Create Party" />
        <div>
            
            <FormInput description="Party Title" placeholder="Enter party title" type="text" required onChange={e => setUserName(e.target.value)}/>
            <FormInput description="Address" placeholder="Enter the address" type="address" required/>
            <FormInput description="Zipcode" placeholder="Enter the zipcode" type="zipcode" required/>
            <Form.Group controlId="exampleForm.ControlTextarea1" id="form-control" placeholder="Enter the description" type="description">
              <Form.Label id="title_description">Description</Form.Label>
              <Form.Control id="form-control1" as="textarea" placeholder="Enter the Description" rows={5} />
            </Form.Group>

            <FormButton title="Create Party" type="submit"/>
        </div>
        { <OtherMethods /> }
      </div>
      </Form>
    )

};

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
  </div>  
);

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const Facebook = props => (
  <a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
  <a href="#" id="twitterIcon"></a>
);

const Google = props => (
  <a href="#" id="googleIcon"></a>
);*/


import React, {useState} from "react"
import axios from 'axios';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import TimerIcon from '@material-ui/icons/Timer';
import EventIcon from '@material-ui/icons/Event';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { any, string } from "prop-types";
import { TextareaAutosize } from "@material-ui/core";
import DescriptionIcon from '@material-ui/icons/Description';

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
}));

export default function SignInSide() {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const history = useHistory();

  const handleSubmit = async e => {
      //console.log(localStorage.getItem('JWT'));
      console.log("email: " + email)
      console.log("password: " + password)

      e.preventDefault();
      setShowSuccess(false)
      setShowError(false)

      axios.post( 'http://localhost:1337/auth/local', {
        "identifier": email,
        "password": password
      })
      .then(response => {
        console.log(response)
        setShowSuccess(true)
        localStorage.setItem('JWT', response.data.jwt);
        history.push("/");

      })
      .catch(error => {
        setShowError(true)
      });
    }
  
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/* <Grid item xs={false} sm={4} md={7}  className={classes.image} /> */}
      <Grid item xs={12} sm={12} md={12} lg={12} xlg={12} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AddToQueueIcon></AddToQueueIcon>
          </Avatar>
          <Typography component="h1" variant="h5">
            Create New Party
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
             InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                ),
                }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="title"
              label="Enter Party Title"
              name="title"
              autoComplete="current-title"
              autoFocus
            />
             <TextField
             InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <HomeIcon />
                    </InputAdornment>
                ),
                }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="address"
              label="Enter The Address"
              type="address"
              id="address"
              autoComplete="current-address"
            />
            <TextField
             InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AddLocationIcon />
                    </InputAdornment>
                ),
                }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="zipcode"
              label="Enter Zipcode"
              type="zipcode"
              id="zipcode"
              autoComplete="current-zip"
            />
            <TextField
             InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <DescriptionIcon />
                    </InputAdornment>
                ),
                }}
              rowsMin={4}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="description"
              label="Enter Description"
              type="description"
              id="description"
              autoComplete="current-description"
              multiline
              rows={4}
              rowsMax={4}
            />
            <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={5}>
                
                <TextField
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EventIcon />
                        </InputAdornment>
                    ),
                    }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="date"
                label="Enter date"
                type="date"
                id="date"
                autoComplete="current-date"
              
                />
            </Grid>
            <Grid item xs={5}> 
                <TextField
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <TimerIcon />
                    </InputAdornment>
                ),
                }}
                
                variant="outlined"
                margin="normal"     
                required
                fullWidth
                name="time"
                label="Enter time"
                type="time"
                id="time"
                autoComplete="current-time"
            
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
              Create Party
            </Button>
    
            <Box mt={5}>
              <Copyright />
            </Box>

          </form>
        </div>
      </Grid>
    </Grid>
  );
}