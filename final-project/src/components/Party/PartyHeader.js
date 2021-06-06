import React from 'react'
import styled from 'styled-components'
import AccountCircle from '@material-ui/icons/AccountCircle';



const Wrapper = styled.div`
    .party-card-highlight__header {
        height: 45px;
        background-color:  ${props => props.color};
        border-top-left-radius: 6.51px;
        border-top-right-radius: 6.51px;
        padding-top: 12px;
        padding-right: 16px;
        text-align: left
       
    }
    .party-card-highlight__header-zipcode {
        height: 19px;
        margin: 0.2px 24px 5.8px 0;
        object-fit: contain;
        font-family: SFProDisplay;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #b5d8be;
    }
    .party-card-hightlight__header-title2 {
        // width: 95px;
        height: 21px;
        font-family: SFProDisplay;
        font-size: 22px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #FFFFFF;
        padding: 0px 0 18px 20px;
    }

    .party-card-hightlight__header-title {
        // width: 95px;
        height: 21px;
        font-family: SFProDisplay;
        font-size: 22px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
        
        padding: 0px 0 18px 20px;
    }
    @media (max-width: 767px) {
        .party-card-highlight__header {
            padding-right: 12px;
            height: 41px;
        }
        .party-card-highlight__header-zipcode {
            margin: 0.2px 12px 0px 0;
            font-size: 12px;
        }
        .party-card-hightlight__header-title {
            font-size: 14px;
        }

    }
    .MuiSvgIcon-root{
        margin-top: -5px;
        margin-left: -20px;
    }

`;
const PartyHeader = props => {
    const colors = ["#9F1412", "#242D3C", "#168851", "#247058", "#2E372F", "#170312", "#33032F", "#531253", "#4D5859", "#328555" ];

    const mycolor = colors[Math.floor(Math.random() * colors.length)];
    return (
        <Wrapper color={mycolor}>
            <div className="container-fluid party-card-highlight__header">
                <div className="party-card-hightlight__header-title2">
                <AccountCircle/> {props.host.username}</div>
                
                <div className="row d-flex flex-row justify-content-between">
                    <div className="party-card-hightlight__header-title">
                        Do not miss it!!!! 
                    </div>
                    <div className="d-flex flex-column">
                        <div>
                            <h3 className="party-card-highlight__header-zipcode">{props.zipcode}</h3>
                        </div>                 
                    </div>                    
                </div>
                
            </div>
        </Wrapper>
    )
}

export default PartyHeader
