import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our <strong className="purple">Products </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few products ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Easy Eat"
              description="Fast Book is transforming dining experiences. Walk into a restaurant, scan a QR code, select your meal, and let the kitchen do the rest. This system streamlines ordering, reduces errors,and heightens customer satisfaction. Explore a new age of dining with Easy Eat - effortless, efficient, and digital! "
              ghLink="#"
              demoLink="#"              
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="E-Comm Message Analyzer"
              description="Introducing E-Comm Message Analyzer, a revolutionary tool reshaping e-commerce communications. Powered by advanced AI, our extension meticulously filters and prioritizes your messages, identifying urgent communications and providing strategic insights. Embrace the future of seamless, efficient communication today."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Websites"
              description="Experience the power of a personalized website with our bespoke web design services. Each site we create is a unique blend of innovative design, seamless functionality, and strategic SEO optimization. Step into the digital world with confidence as our custom websites not only impress visually, but also drive growth and enhance your online presence."
              ghLink="#"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title=" Discord Bot Tailor"
              description="Transform your community interaction with Discord Bot Tailor. We offer custom-coded Discord bots, tailored to your unique requirements. From moderation to entertainment, just tell us what you envision and we'll bring your ideal bot to life, enhancing your server's functionality and user engagement."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AppCrafters"
              description="Bring your mobile app vision to life with us. We specialize in crafting tailor-made mobile applications that cater to your specific needs. Whether it's for Android, iOS, or cross-platform, our team will transform your idea into a powerful app, designed to engage users and elevate your digital presence."
              ghLink="#"
              demoLink="#" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="YourVision Creators"
              description="Step beyond the ordinary with us. We offer customized solutions tailored to your unique digital needs. Whether it's a specific feature, a unique web tool, or a different platform altogether, we'll turn your distinct vision into a functional, engaging reality."
              ghLink="#"
              demoLink="#"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
