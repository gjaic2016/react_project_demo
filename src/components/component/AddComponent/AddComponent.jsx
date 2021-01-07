import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import noimage from "../../../resources/images/noimage.jpeg";

const AddComponent = (props) => {
  return (
    <>
      <Jumbotron key={props.id} className="jumbotron-add">
        <Container>
          <Row>
            <Col className="col-md-2">
              <img
                className="addPicture"
                src={props.picture ? props.picture : noimage}
                alt={props.picture}
                width="150px"
                height="150px"
              ></img>
            </Col>
            <Col className="col-md-10">
              <div className="addsTitle">
                <p>{props.title}</p>
              </div>
              <div className="break-word">
                <p>{props.description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};

export default AddComponent;
