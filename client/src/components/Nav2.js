import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

export default class Nav2 extends React.Component {
  render() {
    return (
      <div>
        <Nav className="justify-content-center" activeKey="/all">

          <Nav.Item>
            <Nav.Link href="/user">My page</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Form">Contact Form</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/chat/1">Customer Support</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Userupdate">Update Details</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Kart">Kart</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>

            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    )
  }
}
