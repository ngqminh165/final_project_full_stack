import React, {useState} from "react"
import axios from 'axios';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
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
import DescriptionIcon from '@material-ui/icons/Description';
import Carousel from 'react-material-ui-carousel'


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
        CELLABORATE
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
    backgroundPosition: 'left',
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
  const [party_title, setParty] = useState();
  const [Address, setAddress] = useState();
  const [Zipcode, setZip] = useState();
  const [Description, setDes] = useState();
  const [Celebrate_date, setCele] = useState();
  //const [ID, setID] = useState();
  const [Time, setTime] = useState();
 
  const history = useHistory();

  function handleSubmit (e) {
      
      console.log(localStorage.getItem('JWT'));
      console.log("party_title: " + party_title);
      console.log("Address: " + Address);
      console.log("Zipcode: " + Zipcode);
      console.log("Description: " + Description);
      console.log("Celebrate: " + Celebrate_date);
      var user_info = localStorage.getItem('user')
      user_info=JSON.parse(user_info)
      console.log("ID: " + user_info.id);
      console.log("Time: " + Time);
      console.log(Celebrate_date + " " + Time);
      var timeParts = Time.split(':');
      var dateParts = Celebrate_date.split('-')

      var date = new Date(dateParts[0], parseInt(dateParts[1], 10) - 1, dateParts[2], timeParts[0], timeParts[1]);

      var timestamp = date.getTime();
      e.preventDefault();
      

      var data = JSON.stringify({
        "party_title": party_title,
        "Address": Address,
        "Zipcode": Zipcode,
        "Description": Description,
        "Celebrate_date": timestamp,
        "host": {
            "id": user_info.id
        }
      });

      var config = {
      method: 'post',
      url: process.env.REACT_APP_API_URL +'parties',
      headers: { 
          'Authorization': 'Bearer ' + localStorage.getItem('JWT'), 
          'Content-Type': 'application/json'
      },
      data : data
    };
    axios(config)
      .then(function (response) {
        alert("test");
        alert(JSON.stringify(response.data));
        console.log(JSON.stringify(response.data));
        

        history.push('/partydetail/' + response.data.id);
      })
      .catch(function (error) {
        alert(error);
        console.log(error);
        
      });
    }
  
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      
      <Grid item xs={12} sm={8} md={5}  component={Paper} elevation={6} square>
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
                
              autoFocus
              value={party_title}
              onInput={ e=>setParty(e.target.value)}
              autoComplete="current-title"
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
              value={Address}
              onInput={ e=>setAddress(e.target.value)}
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
              value={Zipcode}
              onInput={ e=>setZip(e.target.value)}
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
              value={Description}
              onInput={ e=>setDes(e.target.value)}
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
                value={Celebrate_date}
                onInput={e=>setCele(e.target.value)}
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
                value={Time}
                onInput={e=>setTime(e.target.value)}
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
      <Grid item xs={false} sm={4} md={7} component={Paper}>
        <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                item xs={false} sm={4} md={7}
                >      
                  <img class="rounded float-right" alt="Responsive image" height="800" width="800" src="https://images.unsplash.com/photo-1471967183320-ee018f6e114a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"/>
                  <img class="rounded float-right" alt="Responsive image" height="800" width="800" src="https://images.unsplash.com/photo-1530023367847-a683933f4172?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" />
                  <img class="rounded float-right" alt="Responsive image" height="800" width="800" src="https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"/>
                  <img class="rounded float-right" alt="Responsive image" height="800" width="800" src="https://images.unsplash.com/photo-1519214605650-76a613ee3245?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80"/>
                  <img class="rounded float-right" alt="Responsive image" height="800" width="800" src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_614867390_321301.jpg" width='800' height='800'/>     
            
        </Carousel>
      </Grid>
    </Grid>
  );
}