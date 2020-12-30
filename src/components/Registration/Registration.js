import React from "react";
import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap";

const Registration = () => {
  return (
    <>
      <div className="container">
        <Card className="card-styling login-fix shadow">
          <Card.Header>
            <h2>Registracija</h2>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="lastname" placeholder="Unesi ime" />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="lastname" placeholder="Unesi prezime" />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Unesi E-mail" />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="lastname" placeholder="Unesi korisničko ime" />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="lastname" placeholder="Unesi lozinku" />
                </Form.Group>
              </Form>
            </Card.Text>
            <Button variant="primary">Registriraj</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Registration;
