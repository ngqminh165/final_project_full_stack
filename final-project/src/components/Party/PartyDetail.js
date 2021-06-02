import React, {useState} from "react"
import { useParams } from "react-router-dom";
import { FaCalendar } from 'react-icons/fa'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import ShowMoreText from 'react-show-more-text';
import MapWrapper from "./../GoogleMap/mapWrapper";
import PropTypes from 'prop-types';
import { darken, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CovidChart from './../Chartjs/Chart'
import Weather from "../Weather/Weather";
import GoogleMapComponentWithMarker from "./../GoogleMap/GoogleMap"
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import Avatar from '@material-ui/core/Avatar';
import yellow from "@material-ui/core/colors/yellow";
import { blueGrey, grey, lightBlue, lightGreen} from "@material-ui/core/colors";
import { dark, light } from "@material-ui/core/styles/createPalette";
import {
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon
} from "react-share";
import Description from "@material-ui/icons/Description";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  h1: {
    color: lightBlue[800],
  },

  
  gridStyle: {
    backgroundColor: lightBlue[50],
    border: `3px solid ${lightBlue[800]}`,
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));





export default function SimpleTabs() {
  console.log( useParams())
  const { id } = useParams();

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [email, setEmail] = useState();
  const [title, setTitle] = useState();
  const [address, setLocation] = useState();
  const [time, setTime] = useState();
  const [description, setDescription] = useState();
  const [invited, setInvited] = useState();
  const [name, setName] = useState();
  const [initial, setInitial] = useState();
  const [password, setPassword] = useState();
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [attendee, setAdd] = useState([])
  const history = useHistory();
  const [expanded, setExpanded] = useState(false);
  

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
    
    
  };
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


  var axios = require('axios');
  var data = JSON.stringify({
    "party_title": "Thanh's birthday",
    "Address": "11234 SE Division",
    "Zip_zode": "97220",
    "Description": "This weekend, we will CELLABORATE at Cody's House. \n Coming and Join with US. Summer is Coming.\n Do not forget to bring your food. I have beer a lot!!!",
    "Celebrate_date": "2021-05-29T19:00:00.000Z",
    "host": {
      "id": 2
    }
  });

  var config = {
    method: 'get',
    url: 'http://localhost:1337/parties/' + id,
    headers: { 
      'Authorization': 'Bearer ' + localStorage.getItem("JWT"), 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    setTitle(response.data.party_title);
    setLocation(response.data.Address);
    setTime(response.data.Celebrate_date);
    setDescription(response.data.Description);
    setInvited(response.data.invitedList.length);
    setName(response.data.host.username);
    setInitial(response.data.host.username.charAt(0));
    setAdd(arr => [...arr, response.data.invitedList.username]);
    
    
  })
  .catch(function (error) { 
    console.log(error);
  });

  var date = new Date(time);
  console.log(date.getTime());
  var timestamp = date.getTime();
  var date2 = new Date(timestamp);
  var time2 = "Date: "+(date.getMonth()+1)+
  "/"+(date.getDate())+
  "/"+date.getFullYear();
  var time3;
  if(date.getHours() < 10){
    if(date.getMinutes() < 10){
      time3 = "Time: " + "0"+ date.getHours()+
      ":0"+date.getMinutes();
    }
    else{
      time3 = "Time: " + "0"+ date.getHours()+
      ":"+date.getMinutes();
    }
  }
  else {
    if(date.getMinutes() < 10){
      time3 = "Time: " + date.getHours()+
      ":0"+date.getMinutes();
    }
    else{
      time3 = "Time: " + date.getHours()+
      ":"+date.getMinutes();
    }
  }
  
  time2 = time2 + "\n" + time3;
 
  

  return (
    <Grid item xs={12} container component="main" className={classes.root}>


      {/* <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Party" {...a11yProps(0)} />
          <Tab label="Covid" {...a11yProps(1)} />
          <Tab label="Weather" {...a11yProps(2)} />
        </Tabs>
      </AppBar> */}
      <TabPanel value={value} index={0}>
      <Card className={classes.gridStyle}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {initial}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader= {time2} 
        //component= {time3}   
      />
      <CardContent>

        <Typography variant="body2" color="primary" component="p">
          Host: {name} <br></br>
          Address: {address}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      
        <IconButton aria-label="add to favorites" onClick={handleExpandClick}>
            {invited}
          <PersonRoundedIcon onClick={handleExpandClick} />
          
        </IconButton>

        <FacebookShareButton 
          url={'http://localhost:3000/partydetail/' + id}
          >
          <IconButton aria-label="share">
            <FacebookIcon size={32} round={true}/>
          </IconButton>
        </FacebookShareButton>

        <EmailShareButton url={'http://localhost:3000/partydetail/' + id}>
          <IconButton aria-label="share">
            <EmailIcon size={32} round={true}/>
          </IconButton>
        </EmailShareButton>

        <TwitterShareButton url={'http://localhost:3000/partydetail/' + id}>
          <IconButton aria-label="share">
            <TwitterIcon size={32} round={true}/>
          </IconButton>
        </TwitterShareButton>
        
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
        <CardContent>
          <Typography paragraph>{description}
          </Typography>
        </CardContent>
      {/* </Collapse> */}
      <CardActions disableSpacing>
        <Button variant="contained" color="primary">
             Join with Us
        </Button>
      </CardActions>

    </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <CovidChart></CovidChart>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Weather></Weather>
      </TabPanel>


      <TabPanel value={value} index={0}>
        <Card className={classes.root}>
          <Grid container xs={12}  direction="row" justify="space-between" alignItems="center" className={classes.gridStyle}>
        
          
            <Grid item xs={6}>
              <header className="d-flex justify-content-center align-items-center">
                <h2 className={classes.h1}>Covid Calculation</h2>
              </header>
              <CovidChart></CovidChart>
            </Grid>
          
            <Grid item xs={6} >
              <header className="d-flex justify-content-center align-items-center">
                <h2 className={classes.h1}>Today's Weather</h2>
              </header>
              <Weather></Weather>
            </Grid>
          
          
          </Grid>
        </Card>
      </TabPanel>

      {/* <TabPanel value={value} index={0}> */}
        <Card className={classes.root}>
          <Grid container xs={12}  className={classes.gridStyle}>
            <Grid item xs={12}>
              <header className="d-flex justify-content-center align-items-center">
                <h2 className={classes.h1}>Direction</h2>
              </header>
              <MapWrapper></MapWrapper>
            </Grid>
          </Grid>
        </Card>
      {/* </TabPanel> */}
      
    </Grid>
    
  );
}
