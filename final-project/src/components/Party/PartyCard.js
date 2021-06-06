import React, { PureComponent } from 'react'
import PartyHeader from './PartyHeader'
import styled from 'styled-components'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';

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


class PartyInfo extends PureComponent {

  handleClick = (id) => {
    const { history } = this.props;
    if(history) history.push('/partydetail/' + id);
   }

state = {
    list_parties: [],
    error: null,
  };

  componentDidMount = async () => {
    
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + 'parties');
      this.setState({ list_parties: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };
  

  render() {
    
    const { error, party } = this.state;
    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    const parties = this.state.list_parties.map(party => (

         
    <Grid item xs={4} >
      <Wrapper  onClick={this.handleClick.bind(this, party.id)} style={{cursor: 'pointer'}}>

            <div className="party-highlight__card p-0 m-2">
                <PartyHeader host={party.host} />
                
                <div className="party-title party-highlight__card-title">
                    <p>{party.party_title}</p>
                </div>
                <div className="party-highlight__card-location">
                    <p>{party.Address}</p>
                </div>
                <div className="party-highlight__card-description d-md-auto">
                    {party.Description}

                </div>

            </div>
      </Wrapper>
      </Grid>
    ))
    return ( 
      
      party !== null ?
          <Grid container spacing={24}>        
             {parties}        
          </Grid>
        : "Only one video"
    );
  }

}

export default withRouter(PartyInfo)