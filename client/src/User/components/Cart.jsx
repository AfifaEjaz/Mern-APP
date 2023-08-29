import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Cartitem from './Cartitem';
import { BsFillCartXFill } from 'react-icons/bs'
import { CartContext } from '../context/addtoCart/context';
import { Link } from 'react-router-dom';

export default function Cart() {

  const [show, setShow] = useState(false);


  const { cart_state, cart_dispatch } = useContext(CartContext)

  // console.log(cart_state.cart)


  return (
    <>
      <Button type='button' onClick={() => setShow(true)} className='position-relative btn btn-dark'>
        <BsFillCartXFill />
        <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
          {cart_state.cart.length}
          <span className='visually-hidden'>unread messages</span>
        </span>
      </Button>

      <Offcanvas show={show} onHide={() => setShow(false)} placement='end' name='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart
            <button className='ms-4 btn btn-outline-secondary'
              onClick={() => cart_dispatch({
                type: 'CLEAR_CART'
              })}
            >Remove All</button>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          {
            cart_state.cart.map((val, key) => <Cartitem key={key} data={val} />)
          }

          <button
            disabled={cart_state.cart.length === 0}
            className="btn btn-secondary w-100 mb-3">
            <Link to={'/product/checkout'} className='text-decoration-none text-white '>
              Checkout!
            </Link>
          </button>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
