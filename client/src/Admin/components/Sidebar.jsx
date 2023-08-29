import React, { useEffect } from 'react'
import { FaHome } from 'react-icons/fa'
import { BiCategoryAlt } from 'react-icons/bi'
import { TbBrandSnowflake } from 'react-icons/tb'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { AiOutlineShopping } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'


import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';


export default function Sidebar() {

  const location = useLocation()

  const NavItems = [
    {
      tab: "Home",
      url: "/",
      icon: <FaHome />
    },
    {
      tab: "Categories",
      url: "/category",
      icon: <BiCategoryAlt />
    },
    {
      tab: "Brands",
      url: "/brand",
      icon: <TbBrandSnowflake />
    },
    {
      tab: "Products",
      url: "/product",
      icon: <MdProductionQuantityLimits />
    },
    {
      tab: "Orders",
      url: "/order",
      icon: <AiOutlineShopping />
    }
  ]

  useEffect

  return (
    <>

      <CDBSidebar backgroundColor="black" className='opacity-75'>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large text-light "></i>}>
          <a href="/" className="text-decoration-none " style={{ color: 'white' }}>
            Admin Dashboard
          </a>

        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>

            {
              NavItems.map((val, key) =>
                <Link key={key} to={val.url}>
                  <CDBSidebarMenuItem  className={`nav-item m-2 ${location.pathname == val.url ? `bg-white opacity-50 text-dark rounded` : null}`} ><span>{val.icon}</span> {val.tab}</CDBSidebarMenuItem>
                </Link>

              )

            }

          </CDBSidebarMenu>
        </CDBSidebarContent>

      </CDBSidebar>





    </>
  )
}
