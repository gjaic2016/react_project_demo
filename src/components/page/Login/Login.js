import React, { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  return (
    <>
      <div className="container">
        <div>{loginStatus}</div>
        <Card className="card-styling-log card-size shadow">
          <Card.Header>Prijava</Card.Header>
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
            <Button variant="primary" onClick={login}>
              Prijava
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Login;
