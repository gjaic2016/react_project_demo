import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Card, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const SubmitAdd = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [archive, setArchive] = useState("N");

  const [show, setShow] = useState("");

  const saveAdd = (e) => {
    setShow(e);
    console.log(title, description);
  };

  return (
    <>
      <div className="container">
        <Card className="card-styling-reg card-size shadow">
          <Card.Header>
            <h2>Predaj oglas</h2>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Form>
                <Form.Group controlId="addTitle">
                  <Form.Control
                    type="text"
                    placeholder="Naziv oglasa"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group controlId="addDescription">
                  <Form.Control
                    type="text"
                    placeholder="Opis oglasa"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>
              </Form>
              {title} {description}
              <div>Upload slike</div>
              <div>Arhiva setirana u useStateu</div>
            </Card.Text>
            <Button variant="primary" onClick={saveAdd}>
              Predaj oglas
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SubmitAdd;
