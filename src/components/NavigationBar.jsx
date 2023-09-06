// import logo from "../assets/Globalimage/logo.png";
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem, Button, Link} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";


const NavigationBar = () => {

    return (
      <>
      <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">RAKIB</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
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