import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import noimage from "../../../resources/images/noimage.jpeg";

const AddComponent = () => {
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
                <p>Oglas Template</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};

export default AddComponent;
