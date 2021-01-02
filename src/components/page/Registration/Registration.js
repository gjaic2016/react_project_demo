import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Axios from "axios";

const Registration = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      username: username,
      password: password,
      country: country,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <div className="container">
        <Card className="card-styling-reg card-size shadow">
          <Card.Header>
            <h2>Registracija</h2>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Form>
                <Form.Group controlId="firstname">
                  <Form.Control
                    type="text"
                    placeholder="Unesi ime"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group controlId="lastname">
                  <Form.Control
                    type="text"
                    placeholder="Unesi prezime"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group controlId="email">
                  <Form.Control
                    type="text"
                    placeholder="Unesi E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Form>
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
              <Form>
                <Form.Group controlId="country">
                  <Form.Control
                    type="text"
                    placeholder="Unesi kraticu zemlje (HR, CZ...)"
                    onChange={(e) => setCountry(e.target.value)}
                    maxLength="2"
                  />
                </Form.Group>
              </Form>
              {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Odaberi zemlju
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </Card.Text>
            <Button variant="primary" onClick={register}>Registriraj</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Registration;
