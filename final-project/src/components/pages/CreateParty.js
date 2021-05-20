import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import CovidChart from '../Chartjs/Chart'
import Weather from '../Weather/Weather'
import MapWrapper from '../GoogleMap/mapWrapper'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'



function CreateParty() {
  return (
    <Container fluid className="mt-3">
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
    <Tab eventKey="home" title="Home">
    <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="formBasicRange">
                    <Form.Label>Range</Form.Label>
                    <Form.Control type="range" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Example multiple select</Form.Label>
                    <Form.Control as="select" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
    </Tab>
    <Tab eventKey="profile" title="Covid">
        <CovidChart zipcode="11111"/>

    </Tab>
    <Tab eventKey="googlemap" title="Google Map">
    <MapWrapper/>

    </Tab>
    <Tab eventKey="direction" title="Direction">
    <MapWrapper/>

    </Tab>
    <Tab eventKey="weather" title="Weather">
    <Weather/>

    </Tab>
    </Tabs>
    </Container>

  );
}

export default CreateParty;