import React from 'react'
import HomeNavigation from '../components/HomeNavigation'
import CategoryCrousel from '../components/CategoryCrousel'
import Try from '../components/try'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AiOutlineLike } from 'react-icons/ai'
import { FaUserTie } from 'react-icons/fa'
import { GrUserFemale } from 'react-icons/gr'
import { CiTimer } from 'react-icons/ci'
import { BsBuildingGear } from 'react-icons/bs'
import { FaRegSmileBeam } from 'react-icons/fa'
import { BsHeartFill } from 'react-icons/bs'
import Card from 'react-bootstrap/Card';
import Loader from '../../Loader';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Home() {

  return (
    <>

      <HomeNavigation />

      {/* Home Banner */}
      <div className="Header" >


        <div className='d-flex position-absolute justify-content-end align-items-center' style={{ height: '20px', width: '85%', marginTop: '300px' }}>
          <div>
            <h1 className=' text-dark' style={{ fontFamily: 'serif' }}>GET THE POWER OF <br /> CLASSIC, MODERN STYLE.</h1>
            <p className=' text-dark'>We are creating faishon that is original, stylish and current</p>
            <Link to="/product"><button className='btn btn-dark'>Shop Now</button></Link>
          </div>
        </div>


        <img className='img-fluid shadow-lg' style={{ height: '680px', width: '100%', opacity: '1' }}
          src="https://img.freepik.com/free-photo/young-japanese-woman-portrait-wearing-sunglasses_23-2148870797.jpg?w=1380&t=st=1692183686~exp=1692184286~hmac=082c8cbfb5ed496607634a8ddb48ba20f1c6287fd9b82ef83b3adac712e779f2" alt="" />
      </div>

      <div className='mt-5'>
        <h1 className='text-center' style={{ fontFamily: 'serif' }}>The Best of our categories are..</h1>
      </div>
      <CategoryCrousel />

      <div id="about" className='mt-5'>
        <h3 className='text-center' style={{ fontFamily: 'serif' }}>WE <span><BsHeartFill /></span> WHAT WE DO</h3>
        <h1 className='text-center'>Our talented teams craft the best <br /> code and design amazing user <br /> experience for our clients</h1>
      </div>

      <div className='text-center mt-5'>
        <img className='img-fluid mb-3'
          style={{ height: '60vh', width: '80%' }}
          src="https://img.freepik.com/free-vector/flat-hand-drawn-people-celebrating-goal-achievement_23-2148843892.jpg?w=1380&t=st=1692183139~exp=1692183739~hmac=da6cd1c3a863d8c0c0a9ce5463f69b15d109e842f3051ed27f38cdf0f19eeec1" alt="" />
      </div>

      <div className='mt-5'>
        <h3 className='text-center' style={{ fontFamily: 'serif' }}>A nearshore experience like you've never had before</h3>
        <p className='text-center'>We are proffessionals, transparent team with 12 years of experience <br /> building teams & products. You work<br /> experience for our clients</p>
      </div>

      <div className="container mt-5">
        <div className="row gap-0">
          <div className="col-md-4 ">
            <div className="border border-dark rounded">
              <h1 className='text-center'>< AiOutlineLike /></h1>
              <h4 className='text-center'>Easy Setup</h4>
              <p className='text-center'>Your team works from our <br /> headquarters and is ready to go <br /> within weeks</p>
            </div>
          </div>
          <div className="col-md-4  ">
            <div className=" border border-dark rounded">
              <h1 className='text-center'>< FaUserTie /></h1>
              <h4 className='text-center'>SCALEABLE</h4>
              <p className='text-center'>Your team works from our <br /> headquarters and is ready to go <br /> within weeks</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border border-dark rounded">
              <h1 className='text-center'>< GrUserFemale /></h1>
              <h4 className='text-center'>TOP TALENT</h4>
              <p className='text-center'>Your team works from our <br /> headquarters and is ready to go <br /> within weeks</p>
            </div>
          </div>
        </div>

        <div className="row mb-5 mt-5">
          <div className="col-md-4">
            <div className="border border-dark rounded">
              <h1 className='text-center'>< CiTimer /></h1>
              <h4 className='text-center'>SAME TIME ZONE</h4>
              <p className='text-center'>Your team works from our <br /> headquarters and is ready to go <br /> within weeks</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border border-dark rounded">
              <h1 className='text-center'>< BsBuildingGear /></h1>
              <h4 className='text-center'>SOLID INFRASTRUCTURE</h4>
              <p className='text-center'>Your team works from our <br /> headquarters and is ready to go <br /> within weeks</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border border-dark rounded">
              <h1 className='text-center'>< FaRegSmileBeam /></h1>
              <h4 className='text-center'>YOUR CULTURE</h4>
              <p className='text-center'>Your team works from our <br /> headquarters and is ready to go <br /> within weeks</p>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
