import React, { useEffect } from 'react'
import axios, { Axios } from 'axios'
import { useState } from 'react'
import ProductModal from '../components/ProductModal'
import { MdDelete } from 'react-icons/md'
import ProductUpdate from '../components/ProductUpdate'
import { AppRoute } from '../../App'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Product() {

  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get('/api/getallproduct')
      .then((json) => setProduct(json.data.product))
      .catch((err) => alert(err.message))
  }, [])

  const deleteProduct = (productID) => {
    const payload = {
      _id: productID
    }
    console.log(payload)

    const config = {
      method: 'delete',
      url: '/api/deleteproduct',
      data: payload
    }
    
    axios(config)
      .then((json) => {
        setProduct(json.data.product)
        // alert("Product Deleted")
        toast.success('🦄 Wow so easy!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      })
      .catch((err) => console.log(err))
  }


  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center bg-dark p-2 my-3 rounded">
          <span className='fs-4 fw-bold text-white'>Products</span>
          <ProductModal recallData={setProduct} />
        </div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Brand</th>
                <th scope="col">Price</th>
                <th scope="col">Thumbnail</th>
                <th scope="col">Images</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                product.map((val, key) =>
                  <tr key={key}>
                    <td>{val.name}</td>
                    <td>{val.category}</td>
                    <td>{val.brand}</td>
                    <td>{val.price}</td>
                    <td><img src={val.thumbnail} alt=""
                      className='img-fluid'
                      style={{ height: '5vh', width: '100%', objectFit: 'contain' }} /></td>
                    <td className='row gap-1'>
                      {
                        val.images.map((val, key) =>
                          <img key={key} style={{ height: '5vh', width: '100%', objectFit: 'contain' }}
                            className='img-fluid mt-2 col-md-1  border '
                            src={val} alt="" />)
                      }
                    </td>
                    <td>{val.description}</td>

                    <td><div className="d-flex">
                      <button className='btn btn-dark'
                        onClick={() => deleteProduct(val._id)}
                      ><MdDelete /></button>
                      <span> <ProductUpdate ID={val._id} recallData={setProduct} /></span>
                    </div>
                    </td>
                  </tr>
                )
              }

            </tbody>
          </table>

        </div>
      </div>

      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
       />
    </>
  )

}
