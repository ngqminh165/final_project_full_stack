import React from 'react'
//import PropTypes from 'prop-types'
import PartyHeader from './PartyHeader'
import styled from 'styled-components'
//import PartyFooter from '../partyFooter';
import axios from 'axios';

const Wrapper = styled.div`
    .party-highlight__card {
        padding: 24px 15px 26px 16px;
        object-fit: contain;
        border-radius: 6.5px;
        box-shadow: 3px 6px 19px -3px rgba(0, 0, 0, 0.3);
        background-color: #ffffff;
    }
    .party-highlight__card-title {
        margin: 16px 45px 16px 19px;
        font-family: SFProDisplay;
        font-size: 22px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #3d7e7f;
    }
    .party-highlight__card-location {
        margin: 0px 45px 0px 19px;
        font-family: SFProDisplay;
        font-size: 18px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #3d7e7f;
    }
    .party-highlight__card-description {
        margin: 5px 16px 5px 17px;
        font-family: SFProDisplay;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        padding-bottom: 10px;
        letter-spacing: normal;
        color: #546163;
        overflow: hidden;   
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
    @media (max-width: 767px) {
        .party-highlight__card-description {
            -webkit-line-clamp: 2 !important;
            margin: 16px 16px 24px 16px;
        }
        .party-highlight__card-title {
            font-size: 16px;
            // margin: 0px 0px 24px 0px;
            margin: 20px 16px 0px 16px;
        }
    }
`;

class PartyInfo extends React.Component {
state = {
    restaurants: [],
    error: null,
  };

  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {

  /*const jwt = localStorage.getItem('JWT')
  const { data } = await axios.get('http://localhost:1337/parties', {
    headers: {
      Authorization:
        'Bearer' + {jwt},
    },
  });*/
    
    try {
      const response = await axios.get('http://localhost:1337/parties');
      this.setState({ restaurants: response.data });
      console.log(response.data)
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, restaurant } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div className="App">
        <ul>
          {this.state.restaurants.map(restaurant => (
            <Wrapper>
            <div className="party-highlight__card p-0 m-2">
                <PartyHeader zipcode=""/>
                 
                <div className="party-title party-highlight__card-title">
                    <p>{restaurant.party_title}</p>
                </div>
                <div className="party-highlight__card-location">
                    <p>{restaurant.Address}</p>
                </div>
                <div className="party-highlight__card-description d-md-block">
                    {restaurant.Description}

                </div>

            </div>
        </Wrapper>
          ))}
        </ul>
      </div>
    );
  }

}

export default PartyInfo




/*const PartyCard = props => {
    return (
        <Wrapper>
            <div className="party-highlight__card p-0 m-2">
                <PartyHeader zipcode="" />
                <div className="party-title party-highlight__card-title">
                    <p>Hang out with Us</p>
                </div>
                <div className="party-highlight__card-location">
                    2207 NE 131 St Ave Portland OR
                </div>
                <div className="party-highlight__card-description d-md-block">
                    {props.description}
                </div>
            </div>
        </Wrapper>
    )
}
export default PartyCard*/