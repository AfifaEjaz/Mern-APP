import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/login/context'
import { decodeToken } from 'react-jwt'
import { BiSolidUserPin } from 'react-icons/bi'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {

  const { state, dispatch } = useContext(GlobalContext)
  // console.log(state.token)
  const admin = decodeToken(state.token)
  // console.log(res.username)

  return (
    <>
    
      <Navbar expand="sm" className='bg-dark'>
        <Container>
          <Navbar.Brand className='text-light' href="#home">edgeStyle</Navbar.Brand>
          <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">
              <span className='fs-5 mx-1 border-bottom py-2 text-light '><span className='fs-3 mx-1'><BiSolidUserPin /></span>{admin.username}</span>


              <button className="btn mx-3 btn-outline-light"
                onClick={() => dispatch({
                  type: "LOGOUT"
                })
                } >Log out</button>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
