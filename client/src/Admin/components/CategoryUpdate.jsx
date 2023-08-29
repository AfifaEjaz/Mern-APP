import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { FaPencilAlt } from 'react-icons/fa'
import { storage } from '../utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';

function CategoryUpdate({ recallData, ID }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState("")
    const [image, setImage] = useState(null)


    const updateCategory = (e) => {
        e.preventDefault()

        const storageRef = ref(storage, `images/category/${image.name}`);
        uploadBytes(storageRef, image).then((snapshot) => {
            getDownloadURL(snapshot.ref)
                .then((url) => {
                    const payload = {
                        _id: ID,
                        name,
                        image: url
                    }
                    console.log(payload)
                    axios.put('/api/updatecategory', payload)
                        .then((json) => {

                            setShow(false);
                            recallData(json.data.category);
                            alert("Category Updated")

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
                    <Modal.Title>Update Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={updateCategory}>
                        <div className="mb-3">
                            <label htmlFor="CateogoryName" className="form-label">
                                Category Name
                            </label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="CateogoryName"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Category Image
                            </label>
                            <input className="form-control" onChange={(e) => setImage(e.target.files[0])} type="file" id="formFile" />
                        </div>
                        <button type="submit" className="btn btn-secondary">
                            Submit
                        </button>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default CategoryUpdate;