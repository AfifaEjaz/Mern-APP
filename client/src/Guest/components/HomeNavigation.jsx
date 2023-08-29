import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaHome } from 'react-icons/fa'
import { BiCategoryAlt } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'
import { MdRoundaboutRight } from 'react-icons/md'
import { AiOutlineShopping } from 'react-icons/ai'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
// import Cart from './Cart';

export default function HomeNavigation() {

  const NavItems = [
    {
      tab: "Home",
      url: "/",
      icon: <AiOutlineHome />
    },
    {
      tab: "About us",
      url: "#about",
      icon: <MdRoundaboutRight />
    },
    {
      tab: "Shop",
      url: "/product",
      icon: <AiOutlineShopping />
    }

  ]
  return (
    <>

      <Navbar expand="sm" className='' style={{ width: '100%' }}>
        <Container>
          <Navbar.Brand className='text-dark px-3' href="/"><strong>edgeLifestyle</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">
              {
                NavItems.map((val, key) =>
                  <Nav.Link className='text-dark' key={key} href={val.url}>
                    <span className='mx-1'>{val.icon}</span>
                    {val.tab}</Nav.Link>
                )
              }

              <Nav.Link className='text-dark' href="/signup">Sign up</Nav.Link>
              <Nav.Link className='dark' href="/login">Login</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}