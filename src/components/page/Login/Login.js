import React from "react";
import Axios from "axios";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
// import Toast from "react-bootstrap/Toast";
// import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  // const [show, setShow] = useState(false);
  // const toggleShow = () => setShow(!show);

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
            <Button variant="primary" onClick={login}>
              Prijava
            </Button>
          </Card.Body>
        </Card>
        {/* <div>
          <Toast className="toast" onClose={toggleShow} closeButton animation={false}>
            <Toast.Header></Toast.Header>
            <Toast.Body>
              <h3>{loginStatus}</h3>
            </Toast.Body>
          </Toast>
        </div> */}
       
      </div>
    </>
  );
};

export default Login;
