import React from "react";
import { Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <div className="navbar_wrapper" >
        <div >
          <Button variant="primary">Početna</Button>
          <Button variant="primary">Oglasi</Button>
          <Button variant="primary">O nama</Button>
          <Button variant="primary">Registracija</Button>
          <Button variant="primary">Prijava</Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
