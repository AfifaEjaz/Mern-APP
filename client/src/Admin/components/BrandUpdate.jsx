import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { FaPencilAlt } from 'react-icons/fa'
import { storage } from '../utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import Loader from './Loader';


export default function BrandUpdate({ recallData, ID }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [brandname, setBrandname] = useState("")
    const [logo, setLogo] = useState(null)
    const [isLoading, setIsLoading] = useState(false);


    const updateBrand = (e) => {
        e.preventDefault()
        setIsLoading(true);


        const storageRef = ref(storage, `images/Brand/${logo.name}`);
        uploadBytes(storageRef, logo).then((snapshot) => {
            getDownloadURL(snapshot.ref)
                .then((url) => {
                    const payload = {
                        _id: ID,
                        brandname,
                        logo: url
                    }
                    axios.put('/api/updatebrand', payload)
                        .then((json) => {
                            setIsLoading(false);
                            setShow(false);
                            setBrandname("")
                            alert("Brand Updated")


                            recallData(json.data.brand);
                        })
                        .catch(err => alert(err.message))
                })
                .catch((error) => alert(error.message));
        });

    }

    return (
        <>
            <Button variant="dark" className='mx-1' onClick={handleShow}>
                <FaPencilAlt />
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Update Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={updateBrand}>
                        <div className="mb-3">
                            <label htmlFor="CateogoryName" className="form-label">
                                Brand Name
                            </label>
                            <input
                                value={brandname}
                                onChange={(e) => setBrandname(e.target.value)}
                                type="text"
                                className="form-control"
                                id="CateogoryName"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Logo
                            </label>
                            <input className="form-control" onChange={(e) => setLogo(e.target.files[0])} type="file" id="formFile" />
                        </div>
                       <div className="d-flex">
                       <button type="submit" className="btn btn-secondary">
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
