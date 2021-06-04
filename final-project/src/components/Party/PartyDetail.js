import React, { useState, useEffect } from "react"

import { useParams } from "react-router-dom";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import MapWrapper from "./../GoogleMap/mapWrapper";
import PropTypes from 'prop-types';
import { darken, makeStyles } from '@material-ui/core/styles';
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
import PeopleIcon from '@material-ui/icons/People';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import Avatar from '@material-ui/core/Avatar';
import yellow from "@material-ui/core/colors/yellow";
import { blueGrey, grey, lightBlue, lightGreen } from "@material-ui/core/colors";
import { dark, light } from "@material-ui/core/styles/createPalette";
import { green } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';
import { fibs2zip } from "../../data/zip"

import {
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon
} from "react-share";
import Description from "@material-ui/icons/Description";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import StarBorder from '@material-ui/icons/StarBorder';
import styled from 'styled-components'


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

  h2: {
    color: lightBlue[800],
    marginTop: 120
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


const useNest = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));


export default function SimpleTabs() {
  let namesList = [];
  let covid_data = {
    labels: [
      'Cases',
      'Vaccinations Initiated',
      'vaccinations Completed'
    ],

    datasets: [{

      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
      ],
      borderWidth: 1,
      data: [37221, 397827, 258219]

    }]

  };
  const { id } = useParams();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [email, setEmail] = useState();
  const [title, setTitle] = useState();
  const [address, setLocation] = useState();
  const [zipcode, setZipcode] = useState();
  const [time, setTime] = useState();
  const [description, setDescription] = useState();
  const [invited, setInvited] = useState();
  const [name, setName] = useState();
  const [initial, setInitial] = useState();
  const [attendees, setAdd] = useState({})
  const history = useHistory();
  const [expanded, setExpanded] = useState(false);
  const [covidData, setCovidData] = useState({});

  const [invitedList, setInvitedList] = useState([]);
  const nestList = useNest();
  const covidApiKey = '4788701cc7ad4407b055d07a4c8466f1'

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Get Covid Data
  const getCovidData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((item) => {
        let covid_data = {
          labels: [
            'Cases',
            'Vaccinations Initiated',
            'vaccinations Completed'
          ],
          datasets: [{

            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
            ],
            borderWidth: 1,
            data: [item.actuals.cases,
            item.actuals.vaccinationsInitiated,
            item.actuals.vaccinationsCompleted]

          }]
        };
        setCovidData(covid_data)

      })
      .catch((error) => console.log("Error"))
      .finally(() => {
      })
  };

  const handleSubmit = async e => {


    var config = {
      method: 'get',
      url: process.env.REACT_APP_API_URL + 'parties/' + id,
      headers: { 
        'Authorization': 'Bearer ' + localStorage.getItem("JWT"), 
        'Content-Type': 'application/json'
      }
    };

    axios(config)
      .then(function (response) {
        setTitle(response.data.party_title);
        setLocation(response.data.Address);
        setTime(response.data.Celebrate_date);
        setDescription(response.data.Description);
        setInvited(response.data.invitedList.length == 1 ? response.data.invitedList.length + " Buddy" : response.data.invitedList.length + " Buddies");
        setName(response.data.host.username);
        setInitial(response.data.host.username.charAt(0));
        setZipcode(response.data.Zipcode)

        let zip = fibs2zip()
        let fibs = zip[response.data.Zipcode]
        let covid_url = `https://api.covidactnow.org/v2/county/${fibs}.json?apiKey=${covidApiKey}`;
        console.log(covid_url)
        getCovidData(covid_url)
    

        setInvitedList(response.data.invitedList.map(function (attendee) {
          return (
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <PersonRoundedIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary={attendee.username} />
            </ListItem>
          )
        }))
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(handleSubmit, [])


  var date = new Date(time);
  var timestamp = date.getTime();
  var date2 = new Date(timestamp);
  var time2 = "Date: " + (date.getMonth() + 1) +
    "/" + (date.getDate()) +
    "/" + date.getFullYear();
  var time3;
  if (date.getHours() < 10) {
    if (date.getMinutes() < 10) {
      time3 = "Time: " + "0" + date.getHours() +
        ":0" + date.getMinutes();
    }
    else {
      time3 = "Time: " + "0" + date.getHours() +
        ":" + date.getMinutes();
    }
  }
  else {
    if (date.getMinutes() < 10) {
      time3 = "Time: " + date.getHours() +
        ":0" + date.getMinutes();
    }
    else {
      time3 = "Time: " + date.getHours() +
        ":" + date.getMinutes();
    }
  }

  time2 = time2 + "\n" + time3;


  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <Grid item xs={12} container component="main" className={classes.root}>
      <TabPanel value={value} index={0}>
        <Card className={classes.gridStyle}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {initial}
              </Avatar>
            }
            title={title}
            subheader={time2}
          />
          <CardContent>
            <Typography variant="body2" color="primary" component="p">
              Host: {name} <br></br>
          Address: {address}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={nestList.root}
            >
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <PeopleIcon style={{ color: green[500] }} />
                </ListItemIcon>
                <ListItemText primary={invited} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {invitedList}
                </List>
              </Collapse>
            </List>
            <FacebookShareButton
              url={process.env.REACT_APP_PUBLIC_URL + 'partydetail/' + id}
            >
              <IconButton aria-label="share">
                <FacebookIcon size={32} round={true} />
              </IconButton>
            </FacebookShareButton>
            <EmailShareButton url={process.env.REACT_APP_PUBLIC_URL + 'partydetail/' + id}>
              <IconButton aria-label="share">
                <EmailIcon size={32} round={true} />
              </IconButton>
            </EmailShareButton>
            <TwitterShareButton url={process.env.REACT_APP_PUBLIC_URL + 'partydetail/' + id}>
              <IconButton aria-label="share">
                <TwitterIcon size={32} round={true} />
              </IconButton>
            </TwitterShareButton>

          </CardActions>
          <CardContent>
            <Typography paragraph>{description}
            </Typography>
          </CardContent>
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
          <Grid container xs={12} direction="row" justify="space-between" alignItems="center" className={classes.gridStyle}>
            <Grid item xs={6}>
              <header className="d-flex justify-content-center align-items-center">
                <h2 className={classes.h1}>Covid Calculation</h2>
              </header>
              {covidData ? <CovidChart data={covidData}></CovidChart> : ""}

            </Grid>

            <Grid item xs={6} >
              <header className="d-flex justify-content-center align-items-center">
                <h2 className={classes.h2}>Today's Weather</h2>
              </header>
              <Weather></Weather>
            </Grid>
          </Grid>
        </Card>
      </TabPanel>
      <Card className={classes.root}>
        <Grid container xs={12} className={classes.gridStyle}>
          <Grid item xs={12}>
            <header className="d-flex justify-content-center align-items-center">
              <h2 className={classes.h1}>Direction</h2>
            </header>
            <MapWrapper></MapWrapper>
          </Grid>
        </Grid>
      </Card>

    </Grid>

  );
}
