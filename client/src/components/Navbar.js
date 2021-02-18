import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default class Nav2 extends React.Component {
  render() {
    return (

      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              src="logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>          <Nav className="mr-auto">
            <Nav.Link href="/all">Explore</Nav.Link>
            <Nav.Link href="/map">About us</Nav.Link>
            <Nav.Link href="/Offer">Offers</Nav.Link>
          </Nav>

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/login">Login</Nav.Link>

            <Navbar.Text colour="white">
              Signed in as: <a href="/User">{this.props.user}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>


      </>

    )
  }
}