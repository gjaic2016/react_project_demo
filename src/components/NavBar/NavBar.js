import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar_wrapper">
        <div>
          <Link to="/">
            <Button
              variant="dark"
              class="btn btn-primary-outline navbar_button"
            >
              Početna
            </Button>
          </Link>
          <Link to="/adds">
            <Button
              variant="dark"
              class="btn btn-primary-outline navbar_button"
            >
              Oglasi
            </Button>
          </Link>
          <Link to="/about">
            <Button
              variant="dark"
              class="btn btn-primary-outline navbar_button"
            >
              O nama
            </Button>
          </Link>
          <Link to="/registration">
            <Button
              variant="dark"
              class="btn btn-primary-outline navbar_button"
            >
              Registracija
            </Button>
          </Link>
          <Link to="/login">
            <Button
              variant="dark"
              class="btn btn-primary-outline navbar_button"
            >
              Prijava
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
