import { useState, useEffect } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

export default function NavBar() {

  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check the scroll position
      const scrollY = window.scrollY;
      
      setIsNavbarVisible(scrollY <= 10);
      console.log(isNavbarVisible);
      
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts to avoid memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <Navbar expand="md" fixed="top" bg="dark" variant="dark" className={'p-4 ' + (isNavbarVisible ? 'navbar-hidden' : '')}>
      <Navbar.Brand href="#">Enterprise Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Services</Nav.Link>
          <Nav.Link href="#">About Us</Nav.Link>
          <Nav.Link href="#">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}