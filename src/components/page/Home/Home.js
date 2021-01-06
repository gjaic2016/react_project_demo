import React, { useEffect, useState } from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import Fix from "../../../resources/images/fix.jpg";
import ChartComponent from "../../component/ChartComponent";
import Axios from "axios";

const Home = () => {
  const [addsCount, setAddsCount] = useState([]);
  const [addsArchived, setAddsArchived] = useState([]);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/getAddsCount").then((response) => {
      console.log("Fetch counted adds trough api...");
      setAddsCount(response.data[0].ADDS);
      console.log(response.data[0].ADDS);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/getAddsCountArchived").then((response) => {
      console.log("Fetch archived adds trough api...");
      setAddsArchived(response.data[0].ARCHIVED);
      console.log(response.data[0].ARCHIVED);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="divSpacing"></div>
        <Row>
          <Col className="col-md-6">
            <img src={Fix} alt="" width="200px" height="200px"></img>
          </Col>
          <Col className="col-md-6">
            <div>
              {/* {addsCount.map((val) => {val.ADDS})} */}
              {/* {addsCount[0].ADDS}
              {addsArchived.map((val) => {
                return <div>{val.ARCHIVED}</div>;
              })} */}
              <ChartComponent data={[addsCount, addsArchived]} />
              {/* {console.log(addsCount)}
              {console.log(addsArchived)} */}
              {/* <p>Freelancers guild for quick fix and a quick buck!</p> */}
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
