import React from 'react'
import './CategoryCard.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from '../../Loader';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function CategoryCrousel() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const [category, setCategory] = useState([])
    const [isLoadingg, setIsLoadingg] = useState(true);

    useEffect(() => {
        axios.get('/api/getallcategory')
            .then((json) => {
                setCategory(json.data.category);
                setIsLoadingg(false);

            })
            .catch(err => console.log(err.meassage))
    }, [])



    return (
        <>


            <div className="container">
                <Carousel responsive={responsive}>
                    {
                    isLoadingg ? (
                        <Loader style={{width: '100%'}}/>
                    ) : (
                        category.map((val, key) => (
                            <div key={key} className="my-4">
                                <Card className="mx-2 bg-white border category-card">
                                    <Card.Title className="position-absolute text-light mx-3 my-3">
                                        {val.name}
                                    </Card.Title>
                                    <Link to={`/category/${val.name}`}>
                                        <Card.Img
                                            style={{ height: '200px', width: '94%' }}
                                            className="img-fluid m-2 rounded-0"
                                            variant="top"
                                            src={val.image}
                                        />
                                    </Link>
                                </Card>
                            </div>
                        ))
                    )}
                </Carousel>
            </div>










        </>

    )
}
