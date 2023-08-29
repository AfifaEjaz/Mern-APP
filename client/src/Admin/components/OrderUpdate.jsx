import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { FaPencilAlt } from 'react-icons/fa'
import { storage } from '../utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import Loader from './Loader';

export default function OrderUpdate({ recallData, ID }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false);



  const updateOrder = (e) => {
    e.preventDefault()
    setIsLoading(true);

    const payload = {
      _id: ID,
      Status: status,
      Message: message,
    }
    console.log(payload)

    axios.put('/api/update-order', payload)
    .then((json) => {
        setIsLoading(false);
        setShow(false);
        setStatus("")
        setMessage("")

        recallData(json.data.orders);
    })
    .catch(err => alert(err.message))

  }


  return (
    <>
      <Button variant="dark" className='mx-1' onClick={handleShow}>
        <FaPencilAlt />
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form onSubmit={updateOrder}>
            <div className="mb-3">
              <label htmlFor="CateogoryName" className="form-label">
                Status:
              </label>
              <input
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                type="text"
                className="form-control"
                id="status"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="CateogoryName" className="form-label">
                Message:
              </label>
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                className="form-control"
                id="message"
                aria-describedby="emailHelp"
              />
            </div>
           
            <div className="d-flex">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <span>
                {
                  isLoading ? (<Loader />) : (true)
                }
              </span>
            </div>
          </form>
        </Modal.Body>

      </Modal>
    </>
  )
}
