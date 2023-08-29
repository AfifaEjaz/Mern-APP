import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { storage } from '../utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import Loader from './Loader';

function BrandModal({ recallData }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [brandname, setName] = useState("")
    const [logo, setLogo] = useState(null)

    const [isLoading, setIsLoading] = useState(false);

    const AddBrand = (e) => {
        e.preventDefault()

        setIsLoading(true);

        const storageRef = ref(storage, `images/Brand/${logo.name}`);
        uploadBytes(storageRef, logo).then((snapshot) => {
            getDownloadURL(snapshot.ref)
                .then((url) => {
                    const payload = { brandname, logo: url }
                    axios.post('/api/createBrand', payload)
                        .then((json) => {
                            setIsLoading(false);
                            setShow(false);
                            alert("Brand Added")
                            setName("")
                            recallData(json.data.brand);
                        })
                        .catch(err => alert(err.message))
                })
                .catch((error) => alert(error.message));
        });
    }


    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Add Brand
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={AddBrand}>
                        <div className="mb-3">
                            <label htmlFor="CateogoryName" className="form-label">
                                Brand Name
                            </label>
                            <input
                                value={brandname}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="CateogoryName"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Brand Logo
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
    );
}

export default BrandModal;