import React, { useState, useEffect } from 'react'
import HomeNavigation from '../components/HomeNavigation'
import CategoryMenu from '../components/CategoryMenu'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Sidebar from '../components/Sidebar'
import Loader from '../../Loader';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'


export default function ProductsByBrand() {

    const { brandName } = useParams()

    const [productsByBrand, setproductsByBrand] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`/api/productbybrand?brand=${brandName}`)
            .then((json) => {
                setproductsByBrand(json.data.product);
                setIsLoading(false)
            })
            .catch(err => console.log(err.meassage))
    }, [brandName])


    console.log(brandName)



    return (
        <>
            {/* Menu bar */}
            <HomeNavigation />


            {/* Categories Display */}
            <CategoryMenu />


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
                            <h1 className='w-100 mt-2 '>Get your hands on your favourite product now!</h1>
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
                                        productsByBrand.map((val, key) =>
                                            <div key={key} className="col-md-3 ">
                                                <Card className=' bg-white border category-card' >
                                                    <Link to={`/product/${val.name}`}>
                                                        <Card.Img style={{ height: '300px', width: '94%' }}
                                                            className='img-fluid m-2 rounded-0' variant="top"
                                                            src={val.thumbnail} />
                                                    </Link>
                                                    <Card.Body>
                                                        <Card.Title className='text-dark'>{val.name}-{val.price}$</Card.Title>
                                                        <Card.Text>
                                                            {val.description.substring(0, 68)}
                                                        </Card.Text>
                                                      
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
