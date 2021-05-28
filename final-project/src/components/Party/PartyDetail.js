import React, {useState} from "react"
import axios from 'axios';
import { useHistory } from "react-router-dom";
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import MapWrapper from "./../GoogleMap/mapWrapper"
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
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

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
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Minh's Birthday"
        subheader="September 14, 2016"
      />
      <CardContent>

        <Typography variant="body2" color="primary" component="p">
          2207 NE 131st Ave Portland OR
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            5
          <PersonRoundedIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
        <CardContent>
          <Typography paragraph>Summer in Portland may be one of the world’s best-kept secrets. Days are long and dry, 
          temperatures are comfortably warm, and the city makes the most of these conditions with outdoor celebrations and exciting 
          things to do running well into September. There’s no better time for hikes, taking a dip in the Willamette River or heading to
           a nearby farm to pick (and devour) delicious berries. Meanwhile, annual summertime events and festivals include the joyous Portland Pride Parade 
           and Festival in June, the epic Oregon Brewers Festival in July and Pickathon Music Festival in August. Read on for our top picks for things to do, 
           see and experience during a summertime visit to Portland.
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
