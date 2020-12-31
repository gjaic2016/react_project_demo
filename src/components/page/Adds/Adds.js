import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import noimage from "../../../resources/images/noimage.jpeg";
import AddComponent from "../../component/AddComponent";

const Adds = () => {
  return (
    <>
      <div className="container">
        <div className="divSpacing"></div>
        <h2>Oglasi</h2>
        <div className="divSpacing" />
        <AddComponent />
      </div>
    </>
  );
};

export default Adds;
