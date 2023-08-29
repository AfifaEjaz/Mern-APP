import React, { useEffect, useState } from 'react'
import CategoryUpdate from '../components/CategoryUpdate'
import CategoryModal from '../components/CategoryModal'
import axios from 'axios'
import { MdDelete } from 'react-icons/md'


export default function Category() {

  const [category, setcategory] = useState([])

  useEffect(() => {
    axios.get('/api/getallcategory')
      .then((json) => setcategory(json.data.category))
      .catch((err) => console.log(err))
  }, [])


  const deleteCategory = (CategoryName) => {
    const payload = {
      name: CategoryName
    }
    console.log(payload)


    const config = {
      method: 'delete',
      url: '/api/deletecategory',
      data: payload
    }

    axios(config)
      .then((json) => {
        setcategory(json.data.category);
        alert("Category Deleted")
      }
      )
      .catch((err) => console.log(err))



  }


  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center bg-dark p-2 my-3 rounded">
          <span className='fs-4 fw-bold text-white'>Categories</span>
          <CategoryModal recallData={setcategory} />
        </div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Category Name</th>
                <th scope="col">Category Image</th>
                <th scope="col">Actions</th>

              </tr>
            </thead>
            <tbody>
              {
                category.map((val, key) =>
                  <tr key={key}>
                    <th scope="row">{val._id}</th>
                    <td>{val.name}</td>
                    <td><img src={val.image} alt=""
                      className='img-fluid'
                      style={{ height: '5vh', objectFit: 'contain' }} /></td>
                    <td><button className='btn btn-dark '
                      onClick={() => deleteCategory(val.name)}
                    ><MdDelete /></button>
                      <CategoryUpdate ID={val._id} recallData={setcategory} />
                    </td>
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
