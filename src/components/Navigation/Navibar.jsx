import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navibar() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  let dropdownName = 'Choose Cipher';

  if (selectedOption === 'option1') {
    dropdownName = 'Caesar Cipher';
  } else if (selectedOption === 'option2') {
    dropdownName = 'Playfair Cipher';
  } else if (selectedOption === 'option3') {
    dropdownName = 'Hill Cipher';
  } else if (selectedOption === 'option4') {
    dropdownName = 'Vigenere Cipher';
  }

  useEffect(() => {
    const storedOption = localStorage.getItem('selectedOption');
    if (storedOption) {
      setSelectedOption(storedOption);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedOption', selectedOption);
  }, [selectedOption]);

  const handleHomeClick = () => {
    setSelectedOption('');
  };
  return (
    <Navbar expand="lg" className="navigationbar" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Desypher</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto ">
            <Nav.Link href="/home"  onClick={handleHomeClick}>Home</Nav.Link>
            <NavDropdown title={dropdownName} id="basic-nav-dropdown" onSelect={handleOptionSelect}>
              <NavDropdown.Item href="/Caser" eventKey="option1">Caesar Cipher</NavDropdown.Item>
              <NavDropdown.Item href="/Playfaircipher" eventKey="option2">
                Playfair Cipher
              </NavDropdown.Item>
              <NavDropdown.Item href="/Hillcipher" eventKey="option3">Hill Cipher</NavDropdown.Item>
              <NavDropdown.Item href="/Vigenerecipher" eventKey="option4">Vigenere Cipher</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;
