import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import HomeNavigation from '../components/HomeNavigation'
import CategoryMenu from '../components/CategoryMenu'
import axios from 'axios'
import { CartContext } from '../context/addtoCart/context'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Loader from '../../Loader';
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import { AppRoute } from '../../App'

export default function Product() {

  const { cart_state, cart_dispatch } = useContext(CartContext)

  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${AppRoute}api/getallproduct`)
      .then((json) => {
        setProduct(json.data.product);
        setIsLoading(false);
      })
      .catch((err) => console.log(err))
  }, [])


  const addtoCart = (item) => {
    console.log(item)
    cart_dispatch({
      type: "ADD_TO_CART",
      payload: item
    })

  }

  return (
    <>
      {/* Menu bar */}
      <HomeNavigation />


      {/* Categories Display */}
      {
        <CategoryMenu />
      }


      {/* Brands Sidebar */}
      <div style={{ display: 'flex', overflow: 'scroll initial' }}>
        <div className="d-flex" style={{ marginRight: '20px' }}>
          {
            <Sidebar />
          }
        </div>


        {/* All Products */}
        <div className="col-md-9 ">
          <div className="row  my-5">
            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <h1 className='w-100 mt-2' style={{ fontFamily: 'serif' }}>Get your hands on your favourite product now!</h1>
            </div>
            <div className="col-md-9 border">
              <img className='img-fluid w-100 my-2 '
                style={{ height: '35vh', width: '100%' }}
                src="https://img.freepik.com/free-photo/young-asian-woman-sunglasses-going-shopping-holding-bags-from-malls-stores-smiling-standi_1258-156864.jpg?w=1380&t=st=1692192408~exp=1692193008~hmac=80b07c093c51fc47224777322a531e66f224ac8863d34b5b1373256b8326e77a" alt="" />
            </div>
          </div>

          <div className="container">
            <div className="row">
              {
                isLoading ?
                  (<Loader />)
                  :
                  (
                    product.map((val, key) =>
                      <div key={key} className="col-md-3 my-1 ">
                        <Card className='border category-card' >
                          <Link to={`/product/${val.name}`}>
                            <Card.Img style={{ height: '300px', width: '94%' }}
                              className='img-fluid m-2 rounded-0' variant="top"
                              src={val.thumbnail} />
                          </Link>
                          <Card.Body>
                            <Card.Title className='text-dark'>
                              <div>{val.name}</div>

                            </Card.Title>
                            <Card.Text>
                              <div>Price: {val.price}$</div>
                              {val.description.substring(0, 59)}
                            </Card.Text>
                            {/* <Button className='bg-secondary w-100'
                            >Learn more!</Button> */}
                          </Card.Body>
                        </Card>
                      </div>
                    )
                  )
              }
            </div>
          </div>


        </div>
      </div>

    </>

  )
}
