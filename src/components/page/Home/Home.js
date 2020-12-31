import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import Fix from "../../../resources/images/fix.jpg";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="divSpacing"></div>
        <Row>
          <Col className="col-md-6">
            <img src={Fix} alt="" width="50%" ></img>
          </Col>
          <Col className="col-md-6">
            <div >
              <h2>Freelancers guild for quick fix and a quick buck!</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Jumbotron>
            <Container>
              <div>
                <p>
                  Pao vam je mobitel, oštetili ste laptop a svjesni ste da su
                  popravci u raznim servisima preskupi. Tražite li rješenje za
                  svoj problem neovisno kakve je tehničke prirode za koji nemate
                  znanja, ne očajavajte, došli ste na pravo mjesto.
                </p>
                <p>
                  Okupljamo stručnjake različitih znanja i vještina koji imaju
                  vremena i znanja pomoći vam za prihvatljiv trošak. U par
                  koraka do popravka vašeg najdražeg uređaja: Prijavite se,
                  dodajte oglas i opišite problem, sačekajte da vas netko
                  kontaktira, dogovorite prihvatljive uvjete i krenite u akciju.
                </p>
                <p>
                  Provjerite i ostale oglase. Možda baš i vi možete nekome
                  pomoći.
                </p>
              </div>
            </Container>
          </Jumbotron>
        </Row>
      </div>
    </>
  );
};

export default Home;
