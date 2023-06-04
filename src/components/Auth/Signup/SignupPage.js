import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignupCard from "./SignupCard";
import Particle from "../../Particle";

function SignupPage() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          User <strong className="purple">Signup </strong>
        </h1>
        <p style={{ color: "white" }}>
          Please fill in the details to create an account.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            
            <SignupCard />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default SignupPage;
