import React, { useState } from "react";
import Axios from "axios";
import { Card, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ImageUploader from "react-images-upload";

const SubmitAdd = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const archive = "N";

  const saveAdd = () => {
    Axios.post("http://localhost:3001/saveAdd", {
      title: title,
      description: description,
      picture: picture,
      archive: archive,
    }).then((response) => {
      console.log("Save add response: " + response);
    });
  };

  const onImage = async (image) => {
    try {
      setPicture(image[0].name);
    } catch (error) {
      console.log("nes ne valja: ", error);
    }
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
              <Form>
                <ImageUploader
                  withIcon={true}
                  singleImage={true}
                  withPreview={true}
                  buttonText="Odaberi sliku"
                  onChange={onImage}
                  imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                  maxFileSize={5242880}
                />
              </Form>
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
