import { Container, Row, Col, Navbar, Nav, Tab } from "react-bootstrap";
import QueryBuilder from "./Components/QueryBuilder/QueryBuilder";
import RouteMap from "./Components/RouteMap/RouteMap";

function App() {
  return (
    <Container fluid className="mx-auto p-0">
      <Navbar collapseOnSelect bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <span className="d-block my-0 py-0 fs-4">JMSv2</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <main className="m-2 p-2">
        <Tab.Container defaultActiveKey="route_map">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="query_builder">Query builder</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="route_map">Route map</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                <Tab.Pane eventKey="query_builder">
                  <QueryBuilder />
                </Tab.Pane>
                <Tab.Pane eventKey="route_map">
                  <RouteMap />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </main>
    </Container>
  );
}

export default App;
