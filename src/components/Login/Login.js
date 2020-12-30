import React from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <div className="container">
        <Card className="card-styling login-fix shadow">
          <Card.Header>
            <h2>Prijava</h2>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">
                    Username
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">
                    Password
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
            </Card.Text>
            <Button variant="primary">Prijava</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Login;
