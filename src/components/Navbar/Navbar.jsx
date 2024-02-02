/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import logo from "../../images/LogoBN.png";
import { Button, ImageLogo, InputNav, Nav } from "./NavbarStyled";
export function Navbar() {
  return (
    <>
      <Nav>
        <InputNav className="input-search-space">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por título" />
        </InputNav>
        <ImageLogo src={logo} alt="Logo Breaking News" />
        <Button>Entrar</Button>
      </Nav>
      <Outlet />
    </>
  );
}
