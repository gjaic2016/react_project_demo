import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <div className="container">
        <h2>Login</h2>
        <Row>
          <Col>
            <Button>Prijava</Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
