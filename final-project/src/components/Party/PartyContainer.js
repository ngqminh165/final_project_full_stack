import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

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
const PartyContainer = props => {
    return (
        <Wrapper>
            <Container border="primary">

            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            {/* <Row>
                <Col>
                    <Row>
                        <Col>
                            <PartyCard description={descriptionArray[0]}></PartyCard>
                        </Col>
                        <Col>
                            <PartyCard description={descriptionArray[1]}></PartyCard>
                        </Col>
                        <Col>
                            <PartyCard description={descriptionArray[0]}></PartyCard>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <PartyCard description={descriptionArray[0]}></PartyCard>
                        </Col>
                        <Col>
                            <PartyCard description={descriptionArray[1]}></PartyCard>
                        </Col>
                        <Col>
                            <PartyCard description={descriptionArray[0]}></PartyCard>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <PartyCard description={descriptionArray[0]}></PartyCard>
                        </Col>
                        <Col>
                            <PartyCard description={descriptionArray[0]}></PartyCard>
                        </Col>
                        <Col>
                            <PartyCard description={descriptionArray[0]}></PartyCard>
                        </Col>
                    </Row>
                </Col>
                
            </Row> */}
            </Container>
        </Wrapper>
    )
}

export default PartyContainer
