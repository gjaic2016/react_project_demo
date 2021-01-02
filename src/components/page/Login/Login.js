import React from "react";
import { useState } from "react";
import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="container">
        <Card className="card-styling-log card-size shadow">
          <Card.Header>
            <h2>Prijava</h2>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Form>
                <Form.Group controlId="username">
                  <Form.Control
                    type="text"
                    placeholder="Unesi korisničko ime"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group controlId="password">
                  <Form.Control
                    type="text"
                    placeholder="Unesi lozinku"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Card.Text>
            <Button variant="primary">Prijava</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Login;
