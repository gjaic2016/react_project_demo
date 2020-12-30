import React from "react";
import { Container, Jumbotron, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="divSpacing"></div>
        <Row>
          <Jumbotron>
            <Container>
              <div>
                <p>
                  Skupina entuzijasta koji slobodno vrijeme provode u
                  restauriranju uređaja u ispravno stanje. Vodi nas želja za
                  učenjem i usavršavanjem u područjima elektronike,
                  elektrotehnike, mehanike, mehatronike i sličnim granama.
                </p>
                <p>
                  Organiziramo radionice i seminare u područjima informacijskih
                  tehnologija.
                </p>
                <p>Kontakt broj: 01/666-6666</p>
                <p>Mail adresa: info@quickfix.com</p>
              </div>
            </Container>
          </Jumbotron>
        </Row>
        <Row>
          <iframe
            src="http://maps.google.com/maps?q=45.814277, 15.977370&z=15&output=embed"
            width="100%"
            height="600px"
            class="container center-block"
          ></iframe>
        </Row>
      </div>
      <div className="divSpacing"></div>
    </>
  );
};

export default About;
