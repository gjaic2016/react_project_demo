import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Axios from "axios";
import { Dropdown } from "react-bootstrap";

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

  const [countriesList, setCountriesList] = useState([]);

  const handleSelect = (e) => {
    setCountry(e);
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/countries").then((response) => {
      console.log("Fetch countries trough api...");
      console.log(response.data);
      setCountriesList(response.data);
    });
  }, []);

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
                    placeholder={country}
                    maxLength="2"
                  />
                </Form.Group>
              </Form>

              <Dropdown>
                <Dropdown.Toggle
                  className="dropdownToggle"
                  variant="primary"
                  id="dropdown-basic"
                >
                  Odaberi zemlju
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdownScroll">
                  {countriesList.map((value) => {
                    return (
                      <Dropdown.Item
                        key={value.id}
                        onSelect={() => handleSelect(value.country_code)}
                      >
                        {value.country_code}
                        {" - "}
                        {value.country_name}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Card.Text>
            <Button variant="primary" onClick={register}>
              Registriraj
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Registration;
