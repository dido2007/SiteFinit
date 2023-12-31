import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { GoPlus } from "react-icons/go";
import { GiBleedingEye } from "react-icons/gi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
    <Card.Img variant="top" src={`http://localhost:3500/${props.imgPath}`} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.description}
        </Card.Text>

        <Button variant="primary" href={props.ghLink} target="_blank">
          <GoPlus /> &nbsp;
          {props.isBlog ? "Blog" : "Buy"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <GiBleedingEye /> &nbsp;
            {"View"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;