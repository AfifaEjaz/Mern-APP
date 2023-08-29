import React, { useEffect } from 'react'
import { FaHome } from 'react-icons/fa'
import { BiCategoryAlt } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import CategoryCard from './CategoryCrousel';


export default function Sidebar() {



    const [isLoading, setIsLoading] = useState(true);


    const [brand, setBrand] = useState([])

    useEffect(() => {
        axios.get('/api/getallbrand')
            .then((json) => setBrand(json.data.brand))
            .catch(err => console.log(err.meassage))
    }, [])
    

    return (
        <>

            

            <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                <CDBSidebar textColor="#fff" backgroundColor="white" className='border'>
                    <CDBSidebarHeader className='' prefix={<i className="fa fa-bars fa-large text-dark "></i>}>
                        <a href="/" className="text-decoration-none " style={{ color: 'black' }}>
                            Brands
                        </a>

                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>

                            {
                                brand.map((val, key) =>
                                    <Link key={key} to={`/brand/${val.brandname}`}>
                                        <CDBSidebarMenuItem className='after text-dark' icon="columns" >{val.brandname}</CDBSidebarMenuItem>
                                    </Link>
                                )
                            }

                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            style={{
                                padding: '20px 5px',
                            }}
                        >
                            Sidebar Footer
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>

            </div >
        </>
    )
}
