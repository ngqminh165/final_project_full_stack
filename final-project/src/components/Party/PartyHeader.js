import React from 'react'
import styled from 'styled-components'



const Wrapper = styled.div`
    .party-card-highlight__header {
        height: 51px;
        background-color:  ${props => props.color};
        border-top-left-radius: 6.51px;
        border-top-right-radius: 6.51px;
        padding-top: 12px;
        padding-right: 16px;
       
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
`;
const PartyHeader = props => {
    const colors = ["#0d1b1e", "#7798AB", "#C3DBC5", "#E8DCB9", "#F2CEE6"];

    const mycolor = colors[Math.floor(Math.random() * colors.length)];
    console.log(mycolor)
    return (
        <Wrapper color={mycolor}>
            <div className="container-fluid party-card-highlight__header">
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
