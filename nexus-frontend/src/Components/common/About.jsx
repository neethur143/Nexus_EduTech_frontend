import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-5">
      <h2 className="mb-4">About Us</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://placekitten.com/200/200"  // Replace with your image URL
              alt="Team Member"
            />
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://placekitten.com/201/201"  // Replace with your image URL
              alt="Team Member"
            />
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://placekitten.com/202/202"  // Replace with your image URL
              alt="Team Member"
            />
            <Card.Body>
              <Card.Title>Bob Johnson</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
