import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

export default function CategoryCard() {

    const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get('/api/getallcategory')
            .then((json) => setCategory(json.data.category))
            .catch(err => console.log(err.message))
    }, [])

    return (
        <>
        
            <div className="row ">

                {
                    category.map((val, key) =>
                        <div key={key} className="col-md-3 my-4 ">
                            <Card className='mx-2  bg-white border category-card' >
                                <Card.Title className='position-absolute text-light mx-3 my-3'>{val.name}</Card.Title>
                                <Card.Img style={{ height: '200px', width: '94%' }}
                                    className='img-fluid m-2 rounded-0' variant="top"
                                    src={val.image} />
                            </Card>
                        </div>
                    )

                }



                {/* <div className="col-md-3 my-4">
                    <Card className='mx-2 shadow-lg bg-white border' >
                        <Card.Title className='position-absolute text-light mx-3 my-3'>CardTitle</Card.Title>
                        <Card.Img style={{ height: '200px', width: '94%' }}
                            className='img-fluid m-2' variant="top"
                            src="https://i.pinimg.com/originals/b8/c9/50/b8c950aeb2b6c7bc2b1b4fde23e5ce1a.jpg" />
                    </Card>
                </div>

                <div className="col-md-3 my-4">
                    <Card className='mx-2 shadow-lg bg-white border' >
                        <Card.Title className='position-absolute text-light mx-3 my-3'>CardTitle</Card.Title>
                        <Card.Img style={{ height: '200px', width: '94%' }}
                            className='img-fluid m-2' variant="top"
                            src="https://tse3.mm.bing.net/th?id=OIP.Ru3xbMC2dTwfpEuPra0SRgHaE2&pid=Api&P=0&h=180" />
                    </Card>
                </div>

                <div className="col-md-3 my-4 ">

                    <Card className='mx-2 shadow-lg bg-white border' >
                        <Card.Title className='position-absolute text-light mx-3 my-3'>CardTitle</Card.Title>
                        <Card.Img style={{ height: '200px', width: '94%' }}
                            className='img-fluid m-2' variant="top"
                            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/02/I-discovered-digital-art-and-revived-the-artist-in-me-58a183a8f1821__880.jpg" />

                    </Card>
                </div>

            </div>

            <div className="row ">

                <div className="col-md-3 my-4 ">
                    <Card className='mx-2 shadow-lg bg-white border' >
                        <Card.Title className='position-absolute text-light mx-3 my-3'>CardTitle</Card.Title>
                        <Card.Img style={{ height: '200px', width: '94%' }}
                            className='img-fluid m-2' variant="top"
                            src="https://tse2.mm.bing.net/th?id=OIP.4N8gl0FA-aBCcnputTnkNAHaGB&pid=Api&P=0&h=180" />
                    </Card>
                </div>

                <div className="col-md-3 my-4">
                    <Card className='mx-2 shadow-lg bg-white border' >
                        <Card.Title className='position-absolute text-light mx-3 my-3'>CardTitle</Card.Title>
                        <Card.Img style={{ height: '200px', width: '94%' }}
                            className='img-fluid m-2' variant="top"
                            src="https://tse2.mm.bing.net/th?id=OIP.4N8gl0FA-aBCcnputTnkNAHaGB&pid=Api&P=0&h=180" />
                    </Card>
                </div>

                <div className="col-md-3 my-4">
                    <Card className='mx-2 shadow-lg bg-white border' >
                        <Card.Title className='position-absolute text-light mx-3 my-3'>CardTitle</Card.Title>
                        <Card.Img style={{ height: '200px', width: '94%' }}
                            className='img-fluid m-2' variant="top"
                            src="https://tse2.mm.bing.net/th?id=OIP.4N8gl0FA-aBCcnputTnkNAHaGB&pid=Api&P=0&h=180" />
                    </Card>
                </div>

                <div className="col-md-3 my-4 ">

                    <Card className='mx-2 shadow-lg bg-white border' >
                        <Card.Title className='position-absolute text-light mx-3 my-3'>CardTitle</Card.Title>
                        <Card.Img style={{ height: '200px', width: '94%' }}
                            className='img-fluid m-2' variant="top"
                            src="https://tse2.mm.bing.net/th?id=OIP.4N8gl0FA-aBCcnputTnkNAHaGB&pid=Api&P=0&h=180" />

                    </Card>
                </div>

            </div>



            <div className="row ">

                <div className="col-md-3 my-4 ">
                    <Card className='mx-2 shadow-lg bg-white border' >
                        <Card.Title className='position-absolute text-light mx-3 my-3'>CardTitle</Card.Title>
                        <Card.Img style={{ height: '200px', width: '94%' }}
                            className='img-fluid m-2' variant="top"
                            src="https://tse2.mm.bing.net/th?id=OIP.4N8gl0FA-aBCcnputTnkNAHaGB&pid=Api&P=0&h=180" />
                    </Card>
                </div>

                <div className="col-md-3 my-4">
                    <Card className='mx-2 shadow-lg bg-white border' >
                        <Card.Title className='position-absolute text-light mx-3 my-3'>CardTitle</Card.Title>
                        <Card.Img style={{ height: '200px', width: '94%' }}
                            className='img-fluid m-2' variant="top"
                            src="https://tse2.mm.bing.net/th?id=OIP.4N8gl0FA-aBCcnputTnkNAHaGB&pid=Api&P=0&h=180" />
                    </Card>
                </div>

                <div className="col-md-3 my-4">
                    <Card className='mx-2 shadow-lg bg-white border' >
                        <Card.Title className='position-absolute text-light mx-3 my-3'>CardTitle</Card.Title>
                        <Card.Img style={{ height: '200px', width: '94%' }}
                            className='img-fluid m-2' variant="top"
                            src="https://tse2.mm.bing.net/th?id=OIP.4N8gl0FA-aBCcnputTnkNAHaGB&pid=Api&P=0&h=180" />
                    </Card>
                </div>

                <div className="col-md-3 my-4 ">

                    <Card className='mx-2 shadow-lg bg-white border' >
                        <Card.Title className='position-absolute text-light mx-3 my-3'>CardTitle</Card.Title>
                        <Card.Img style={{ height: '200px', width: '94%' }}
                            className='img-fluid m-2' variant="top"
                            src="https://tse2.mm.bing.net/th?id=OIP.4N8gl0FA-aBCcnputTnkNAHaGB&pid=Api&P=0&h=180" />

                    </Card>
                </div> */}

            </div>







        </>

    )
}
