import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { FaPencilAlt } from 'react-icons/fa'
import { storage } from '../utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import Loader from './Loader';
import Form from 'react-bootstrap/Form';


export default function ProductUpdate({ recallData, ID }) {

  const [show, setShow] = useState(false);

  //To get values from API
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])

  //To get values from form
  const [name, setName] = useState("")
  const [thumbnail, setThumbnail] = useState(null)
  const [price, setPrice] = useState(0)
  const [category, setcategory] = useState("")
  const [brand, setBrand] = useState("")
  const [images, setImages] = useState([])
  const [description, setDescription] = useState("")

  const [isLoading, setIsLoading] = useState(false);



  //To show values on brand and category drop down list
  const handleClose = () => setShow(false);
  const handleShow = () => {
    axios.get('/api/getallbrand')
      .then((json) => {
        setBrands(json.data.brand)
        axios.get('/api/getallcategory').then((json) => {
          setCategories(json.data.category)
          setShow(true);
        })

      })
  }

  const urls = []
  const MultipleImageUpload = () => images?.map((val) => {
    const MultipleImageRef = ref(storage, `images/product/${name}/${val.name}`);
    return uploadBytes(MultipleImageRef, val).then((snapshot) => {
      return getDownloadURL(snapshot.ref)
        .then((url) => {
          urls.push(url)
        })
        .catch((error) => alert(error.message));
    });

  })

  const updateProduct = (e) => {
    e.preventDefault()
    setIsLoading(true);

    const uploadImages = MultipleImageUpload()

    Promise.all(uploadImages).then(() => {
      const storageRef = ref(storage, `images/product/${name}/${thumbnail.name}`);
      uploadBytes(storageRef, thumbnail).then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            const payload = {
              _id: ID,
              name,
              brand,
              category,
              price,
              description,
              thumbnail: url,
              images: urls,
            }
            console.log("Ready to hit the API", payload)

            axios.put('/api/updateproduct', payload)
              .then((json) => {
                setIsLoading(false);
                setShow(false);
                recallData(json.data.product);

              }).catch((error) => alert(error.message))
          })
          .catch((error) => { console.log(error.message) });
      });

    }).catch(err => console.log(err.message))

  }

  return (
    <>
      <Button variant="dark" className='mx-1' onClick={handleShow}>
        <FaPencilAlt />
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form onSubmit={updateProduct}>
            <div className="mb-3">
              <label htmlFor="CateogoryName" className="form-label">
                Product Name
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
                Product Thumbnail
              </label>
              <input className="form-control" onChange={(e) => setThumbnail(e.target.files[0])} type="file" id="formFile" />
            </div>

            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Product Category
              </label>
              <Form.Select aria-label="Select Category" onChange={(e) => setcategory(e.target.value)}>
                <option disabled>Select Category</option>
                {
                  categories.map((val, key) =>
                    <option key={key} >{val.name}</option>)
                }
              </Form.Select>
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Product Brand
              </label>
              <Form.Select aria-label="Select Brand" onChange={(e) => setBrand(e.target.value)}>
                <option disabled>Select Brand</option>
                {
                  brands.map((val, key) =>
                    <option key={key} >{val.brandname}</option>
                  )
                }
              </Form.Select>
            </div>
            <div className="mb-3">
              <label htmlFor="">Chose Files one by one</label>
              <input className="form-control" onChange={(e) => setImages([...images, e.target.files[0]])} type="file" id="formFile" />
              <div className='row gap-1'>
                {
                  images.map((val, key) =>
                    <div className='col-md-2 mt-2 border ' key={key}>
                      <h4 className='text-dark position-absolute mx-1'
                        onClick={() => setImages(images.filter((img) => img != val))}
                        style={{ cursor: 'pointer' }}
                      >x</h4>
                      <img style={{ height: '10vh', width: '100%', objectFit: 'fill' }}
                        className='img-fluid mt-1'
                        src={URL.createObjectURL(val)} alt="" />
                    </div>
                  )
                }
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="CateogoryName" className="form-label">
                Price
              </label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                className="form-control"
                id="CateogoryName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="CateogoryName" className="form-label">
                Description
              </label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="form-control"
                id="CateogoryName"
                aria-describedby="emailHelp"
              />
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
