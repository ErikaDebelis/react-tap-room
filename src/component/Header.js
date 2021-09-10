import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Search } from 'react-bootstrap-icons';

function Header() {
  return (
    <Navbar fixed="right" bg="secondary" variant="dark">
    <Nav>
      <div class="buttons">
        <Button variant="outline-light" size="sm" margin="10px">Fake Home Button</Button>
        <Button variant="outline-light" size="sm" margin="10px" >This is all just for visual appeal</Button> 
        <Button variant="outline-light" size="sm" margin="10px" >IDK another Button</Button>
      </div>
      <h2>TAP ROOM</h2>
    </Nav>
    <div className = "search">
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="(again, just for a nice visual)"
          className="mr-2"
          aria-label="Search"
        />
        <Button  size="sm" margin="0 10px" variant="success">Search <Search /></Button>
      </Form>
    </div>
  </Navbar>  
  );
}

export default Header;