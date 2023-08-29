import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import axios from 'axios';




export default function Try() {

    const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get('/api/getallcategory')
            .then((json) => setCategory(json.data.category))
            .catch(err => console.log(err.meassage))
    }, [])

    return (
        <>

            <div>try</div>


            <Carousel data-bs-theme="dark">
                <Carousel.Item>

                    <div className="row ">
                        {
                            category.map((val, key) =>
                                <div key={key} className="col-md-3 my-4 ">
                                    <Card className='mx-2  bg-white border category-card' >
                                        <Card.Title className='position-absolute text-light mx-3 my-3'>{val.name}</Card.Title>

                                        <Card.Img style={{ height: '200px', width: '94%' }}
                                            className='img-fluid m-2 rounded-0' variant="top"
                                            src='http://images2.fanpop.com/image/photos/8800000/Sweety-baby-sweety-babies-8885678-1920-1440.jpg' />

                                    </Card>


                                    <Card className='mx-2  bg-white border category-card' >
                                        <Card.Title className='position-absolute text-light mx-3 my-3'>{val.name}</Card.Title>

                                        <Card.Img style={{ height: '200px', width: '94%' }}
                                            className='img-fluid m-2 rounded-0' variant="top"
                                            src='http://images2.fanpop.com/image/photos/8800000/Sweety-baby-sweety-babies-8885678-1920-1440.jpg' />

                                    </Card>
                                </div>


                            )
                        }


                        {/* <div className="col-md-3 my-4 ">
                            <Card className='mx-2  bg-white border category-card' >
                                <Card.Title className='position-absolute text-light mx-3 my-3'>title</Card.Title>

                                <Card.Img style={{ height: '200px', width: '94%' }}
                                    className='img-fluid m-2 rounded-0' variant="top"
                                    src='http://images2.fanpop.com/image/photos/8800000/Sweety-baby-sweety-babies-8885678-1920-1440.jpg' />

                            </Card>
                        </div>
                        <div className="col-md-3 my-4 ">
                            <Card className='mx-2  bg-white border category-card' >
                                <Card.Title className='position-absolute text-light mx-3 my-3'>title</Card.Title>

                                <Card.Img style={{ height: '200px', width: '94%' }}
                                    className='img-fluid m-2 rounded-0' variant="top"
                                    src='http://images2.fanpop.com/image/photos/8800000/Sweety-baby-sweety-babies-8885678-1920-1440.jpg' />

                            </Card>
                        </div>
                        <div className="col-md-3 my-4 ">
                            <Card className='mx-2  bg-white border category-card' >
                                <Card.Title className='position-absolute text-light mx-3 my-3'>title</Card.Title>

                                <Card.Img style={{ height: '200px', width: '94%' }}
                                    className='img-fluid m-2 rounded-0' variant="top"
                                    src='http://images2.fanpop.com/image/photos/8800000/Sweety-baby-sweety-babies-8885678-1920-1440.jpg' />

                            </Card>
                        </div> */}



                    </div>

                    <Carousel.Caption>
                        <h3>First slide labellllll</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '500px', width: '100%' }} src="http://images2.fanpop.com/image/photos/8800000/Sweety-baby-sweety-babies-8885678-1920-1440.jpg" alt="" />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '500px', width: '100%' }} src="http://www.summitpost.org/images/large/453075.JPG" alt="" />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
