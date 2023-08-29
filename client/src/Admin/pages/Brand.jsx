import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import BrandModal from '../components/BrandModal'
import { MdDelete } from 'react-icons/md'
import BrandUpdate from '../components/BrandUpdate'



export default function Brand() {
  const [brand, setbrand] = useState([])

  useEffect(() => {
    axios.get('/api/getallbrand')
      .then((json) => setbrand(json.data.brand))
      .catch((err) => console.log(err))

  }, [])

  const deleteBrand = (brandName) => {
    console.log(brandName)
    const payload = {
      brandname: brandName
    }
    console.log(payload)


    const config = {
      method: 'delete',
      url: '/api/deletebrand',
      data: payload
    }

    axios(config)
      .then((json) => {
        setbrand(json.data.brands)
        alert("Brand Deleted")
      })
      .catch((err) => console.log(err))
  }


  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center bg-dark p-2 my-3 rounded">
          <span className='fs-4 fw-bold text-white'>Brands</span>
          <BrandModal recallData={setbrand} />
        </div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">brand Name</th>
                <th scope="col">Logo</th>
                <th scope="col">Actions</th>

              </tr>
            </thead>
            <tbody>
              {
                brand.map((val, key) =>
                  <tr key={key}>
                    <th scope="row">{val._id}</th>
                    <td>{val.brandname}</td>
                    <td><img src={val.logo}
                      className='img-fluid'
                      style={{ height: '5vh' }}
                      alt="" /></td>
                    <td><button className='btn btn-dark'
                      onClick={() => deleteBrand(val.brandname)}
                    ><MdDelete/></button>
                    <BrandUpdate ID={val._id} recallData={setbrand}/></td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
