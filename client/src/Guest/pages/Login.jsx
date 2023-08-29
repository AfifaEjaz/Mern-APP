import React, { useContext, useState } from 'react'
import HomeNavigation from '../components/HomeNavigation'
import './Login.css'
import { FaUserAlt } from 'react-icons/fa'
import axios from 'axios'
import Cookies from 'js-cookie'
import { GlobalContext } from '../../Context/login/context'
import LoginLoader from '../components/LoginLoader'

export default function Login() {

  const { state, dispatch } = useContext(GlobalContext)


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [isLoading, setIsLoading] = useState(false);


  const login = (e) => {
    e.preventDefault();

    const payload = { email, password }
    console.log(payload)
    setIsLoading(true);
    axios.post('/api/login', payload)
      .then(json => {
        console.log(json.data.message)
        setIsLoading(false);

        if (json.data.message == 'Invalid Credentials') {
          alert("Invalid Password")
        }
        else {
          Cookies.set('token', json.data.token)

          dispatch({
            type: "LOGIN",
            token: json.data.token
          })
        }
      })
      .catch(err => {
        setIsLoading(true);
        console.log(err)
        console.log(err.response.data.message)
        if (err.response.data.message == 'User not found') {
          setIsLoading(false);
          alert("User not found")
        }
      })
  }


  return (
    <>
      <HomeNavigation />

      <div className="main-container d-flex justify-content-center align-items-center" style={{ height: '90vh', width: '100%' }}>
        <form onSubmit={login} className="form_container">
          <div className="logo_container" ><FaUserAlt /></div>
          <div className="title_container">
            <p className="title">Login to your Account</p>
            <span className="subtitle">
              Get started with our app, just login to your account and enjoy the experience.
            </span>
          </div>
          <br />

          <div className="input_container">
            <label className="input_label" htmlFor="email_field">
              Email
            </label>
            <input
              required
              placeholder="name@mail.com"
              name="input-email"
              type="email"
              className="input_field"
              id="email_field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input_container">
            <label className="input_label" htmlFor="password_field">
              Password
            </label>
            <input
              required
              pattern="^.{8,}$"
              placeholder="Password"
              title="Password should be long than 8 characters"
              name="input-password"
              type="password"
              className="input_field"
              id="password_field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='d-flex'>
            <button title="Sign In" type="submit" className="sign-in_btn px-5">
              <span>Sign In</span>
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
