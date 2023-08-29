import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaHome } from 'react-icons/fa'
import { BiCategoryAlt } from 'react-icons/bi'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

export default function Navigation() {

  const NavItems = [
    {
      tab: "Home",
      url: "/",
      icon: <FaHome />
    },
    {
      tab: "Categories",
      url: "/category",
      icon: <BiCategoryAlt />
    },
    {
      tab: "Brands",
      url: "/brand",
      icon: <BiCategoryAlt />
    },
    {
      tab: "Products",
      url: "/product",
      icon: <BiCategoryAlt />
    }

  ]
  return (
    <>

      <Navbar bg="light" expand="sm">
        <Container>
          <Navbar.Brand href="#home">ArTrove</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">
              {
                NavItems.map((val, key) =>
                  <Nav.Link key={key} href={val.url}>{val.tab}</Nav.Link>
                )
              }

              <Nav.Link className='text-dark' href="/signup">Sign up</Nav.Link>
              <Nav.Link className='text-dark' href="/login">Login</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}
