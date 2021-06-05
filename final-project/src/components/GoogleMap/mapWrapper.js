// Import React and React DOM
import * as React from 'react'
import Geocode from "react-geocode";


// Import Google Map component
import GoogleMapComponentWithMarker from './GoogleMap'

// Some default styles
const styles = {
  width: '100%',
  height: '536px'
}

function getGeo() {

}
// Wrapper with Google Map component
class MapWrapper extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      long: -122.5285835,
      lat: 45.5387549,
      address: "Portland OR",
      hostname: props.hostname
    }
}
  
  componentDidMount() {
    this.setState({ address: this.props.address})
    Geocode.setApiKey("AIzaSyC9A3xNcfCmqNUeNTGxHVFmA9AE4_Fry3U");
    Geocode.setLanguage("en");
    Geocode.setRegion("us");
    Geocode.fromAddress(this.props.address).then(
      (response) => {
        
        const {lat:my_lat, lng:my_long } = response.results[0].geometry.location;
        this.setState({ long: my_long, lat: my_lat })
        console.log(this.state.lat)
        console.log(this.state.long)

      },
      (error) => {
        
        console.error(error);
      }
    );
  }

  render() {
    return (
      <div style={styles}>
        <GoogleMapComponentWithMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC9A3xNcfCmqNUeNTGxHVFmA9AE4_Fry3U"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          long= {this.state.long}
          lat= {this.state.lat}
          hostname= {this.state.hostname}

        />
      </div>
    )
  }
}

// Render everything in HTML
export default MapWrapper