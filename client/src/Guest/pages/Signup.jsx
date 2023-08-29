import React, { useState } from 'react'
import HomeNavigation from '../components/HomeNavigation'
import './Signup.css'
import { FaSignInAlt } from 'react-icons/fa'
import LoginLoader from '../components/LoginLoader'
import axios from 'axios'

export default function Signup() {

  const [username, setName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")

  const [isLoading, setIsLoading] = useState(false);



  const signUp = (e) => {
    e.preventDefault();

    const payload = { username, email, contact, address, password }
    console.log(payload)
    setIsLoading(true);
    axios.post('/api/signup', payload)
      .then(json => {
        console.log(json.data.message);
        setIsLoading(false);
        if (json.data.message == 'Signup Successfully') {
          alert("Congratulations, Your account has been Created")
          setName("")
          setEmail("")
          setContact("")
          setAddress("")
          setPassword("")
        }
        if (json.data.message == 'User already Exist'){
          alert("User already exists")
        }
      })
      .catch(err => console.log(err))
  }


  return (
    <>
      <HomeNavigation />



      <div className="main-container d-flex justify-content-center align-items-center" style={{ height: '90vh', width: '100%' }}>
        <form onSubmit={signUp} className="form-container">
          <div className="logo_container" ><FaSignInAlt /></div>
          <div className="title_container">
            <p className="title">Signup to your Account</p>
            <span className="subtitle">
              Get started with our app, just create an account and enjoy the experience.
            </span>
          </div>


          <div className="input_container">

            <label className="input_label" htmlFor="name_field">
              Name
            </label>
            <input

              title="Enter only Alphabets"
              placeholder="Enter your name"
              name="input-name"
              type="text"
              className="input_field"
              id="name_field"
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input_container">
            <label className="input_label" htmlFor="email_field">
              Email
            </label>
            <input
              required
              placeholder="name@mail.com"
              title="Inpit title"
              name="input-name"
              type="email"
              className="input_field"
              id="email_field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input_container">
            <div className="row">
              <div className="col-md-6">
                <label className="input_label" htmlFor="contact_field">
                  Phone no
                </label>
                <input
                  required
                  placeholder="+92"
                  name="input-name"
                  type="contact"
                  className="input_field"
                  id="no_field"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="input_label" htmlFor="address_field">
                  Address
                </label>
                <input
                  required
                  placeholder="House, #street"
                  name="input-name"
                  type="text"
                  className="input_field"
                  id="address_field"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="input_container">
            <label className="input_label" htmlFor="password_field">
              Password
            </label>
            <input
              pattern="^.{8,}$"
              title="Password should be long than 8 characters"
              placeholder="Password"
              name="input-name"
              type="password"
              className="input_field"
              id="password_field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-flex">
            <button title="Sign In" type="submit" className="signin-btn px-5">
              <span>Sign up</span>
            </button>
            <span>
              {
                isLoading ? (<LoginLoader />) : (true)
              }
            </span>
          </div>
          <p className="note">Terms of use &amp; Conditions</p>
        </form>
      </div>

    </>
  )
}
