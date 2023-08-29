import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Loader from '../../Loader';


export default function CategoryMenu() {

    const [category, setCategory] = useState([])

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios.get('/api/getallcategory')
            .then((json) => {
                setCategory(json.data.category);
                setIsLoading(false);
            })
            .catch(err => console.log(err.message))
    }, [])


    return (
        <>
            <Navbar expand="sm" className='shadow-lg' style={{ width: '100%' }}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="m-auto">
                            {
                                category.map((val, key) =>
                                    <Link to={`/category/${val.name}`} key={key} className='my-1 mx-2 text-dark text-decoration-none '  >
                                        <span className='mx-1 '>{val.name.toUpperCase()}</span>
                                    </Link>
                                )
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
