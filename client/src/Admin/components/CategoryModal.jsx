import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { storage } from '../utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import Loader from './Loader';


function CategoryModal({ recallData }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState("")
    const [image, setImage] = useState(null)

    const [isLoading, setIsLoading] = useState(false);



    const AddCategory = (e) => {
        e.preventDefault()
        console.log(image)
        setIsLoading(true);


        const storageRef = ref(storage, `images/category/${image.name}`);
        uploadBytes(storageRef, image).then((snapshot) => {
            getDownloadURL(snapshot.ref)
                .then((url) => {
                    const payload = { name, image: url }
                    axios.post('/api/createcategory', payload)
                        .then((json) => {
                            setIsLoading(false);
                            setShow(false);
                            recallData(json.data.categories);
                            alert("Category Added")

                        })
                        .catch(err => alert(err.message))

                })
                .catch((error) => alert(error.message));
        });
    }


    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Add Category
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={AddCategory}>
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

export default CategoryModal;