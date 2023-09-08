// import logo from "../assets/Globalimage/logo.png";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { NavLink } from "react-router-dom";


const NavigationBar = () => {

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">RAKIB</p>
        </NavbarBrand>
        <NavbarContent className=" sm:flex gap-4" justify="center">
          <NavbarItem>
            <NavLink to='/services' > Services</NavLink>
          </NavbarItem>
          <NavbarItem isActive>
            <NavLink to='/app' > App</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to='/user' > User</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to='/update' > User Update</NavLink>
          </NavbarItem>

        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <NavLink to='/update' > Update User</NavLink>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

    </>
  );
};

export default NavigationBar;