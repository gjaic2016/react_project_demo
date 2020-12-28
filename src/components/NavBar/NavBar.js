import React from "react";
import { Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <div className="navbar_wrapper" >
        <div >
          <Button variant="dark">Početna</Button>
          <Button variant="dark">Oglasi</Button>
          <Button variant="dark">O nama</Button>
          <Button variant="dark">Registracija</Button>
          <Button variant="dark">Prijava</Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
