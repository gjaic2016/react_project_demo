import React from "react";
import { Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <div className="navbar_wrapper" >
        <div >
          <Button variant="dark" class="btn btn-primary-outline navbar_button" href="/">Početna</Button>
          <Button variant="dark" class="btn btn-primary-outline navbar_button">Oglasi</Button>
          <Button variant="dark" class="btn btn-primary-outline navbar_button">O nama</Button>
          <Button variant="dark" class="btn btn-primary-outline navbar_button">Registracija</Button>
          <Button variant="dark" class="btn btn-primary-outline navbar_button" href="/login">Prijava</Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
