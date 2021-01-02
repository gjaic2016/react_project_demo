import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import noimage from "../../../resources/images/noimage.jpeg";

const AddComponent = (props) => {
  return (
    <>
      <Jumbotron className="jumbotron-add">
        <Container>
          <Row>
            <Col className="col-md-2">
              <img src={noimage} alt="" width="50%"></img>
            </Col>
            <Col className="col-md-10">
              <div>
                <p><h3>{props.title}</h3></p>
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
