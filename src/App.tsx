import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
      <h2>JMS v2 Components library</h2>

      <section className="border border-secondary p-3">
        <h5>Components list</h5>
        <Row>
          <Col lg={3}>
            <ListGroup variant="flush" defaultActiveKey="/">
              <ListGroup.Item action href="/query-builder">
                Query builder
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default App;
