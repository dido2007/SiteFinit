import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginCard from "./LoginCard";
import Particle from "../../Particle";

function LoginPage() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          User <strong className="purple">Login </strong>
        </h1>
        <p style={{ color: "white" }}>
          Please enter your login details.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            
            <LoginCard />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default LoginPage;
