


/*import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import CovidChart from "../Chartjs/Chart"
import Weather from "../Weather/Weather"
import MapWrapper from "../GoogleMap/mapWrapper"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
//import backg from "./images/CellaborateDefaultImage.jpg"
import styled from "styled-components"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const Wrapper = styled.div`
  font-family: "Roboto";
  font-size: 24px;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`

function CreateParty() {
  return (


    <Container fluid className="mt-3" variant="dark" bg="dark">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <Form style={{}}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridTitle">
                <Wrapper>
                  <Form.Label>Party Title</Form.Label>
                </Wrapper>
                <Form.Control placeholder="Mid-2000's scene themed party" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Wrapper>
                  <Form.Label>Host</Form.Label>
                </Wrapper>
                <Form.Control placeholder="Gerard Way" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Wrapper>
                <Form.Label>Address</Form.Label>
              </Wrapper>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Wrapper>
                <Form.Label>Address 2</Form.Label>
              </Wrapper>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Wrapper>
                  <Form.Label>City</Form.Label>
                </Wrapper>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Wrapper>
                  <Form.Label>State</Form.Label>
                </Wrapper>
                <Form.Control placeholder="OR, WA, etc." />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Wrapper>
                  <Form.Label>Zip</Form.Label>
                </Wrapper>
                <Form.Control />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Wrapper>
                  <Form.Label>Day</Form.Label>
                </Wrapper>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Wrapper>
                  <Form.Label>Month</Form.Label>
                </Wrapper>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Wrapper>
                  <Form.Label>Year</Form.Label>
                </Wrapper>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="profile" title="Covid">
          <CovidChart zipcode="11111" />
        </Tab>
        <Tab eventKey="googlemap" title="Google Map">
          <MapWrapper />
        </Tab>
        <Tab eventKey="direction" title="Direction">
          <MapWrapper />
        </Tab>
        <Tab eventKey="weather" title="Weather">
          <Weather zipcode="97266" />
        </Tab>
      </Tabs>

    </Container>

  );
}

export default CreateParty;*/