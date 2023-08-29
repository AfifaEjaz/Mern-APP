import React, { useContext, useEffect, useState } from 'react'
import Admin from './Admin'
import User from './User'
import Guest from './Guest'
import { GlobalContext } from './Context/login/context'
import { decodeToken } from 'react-jwt'

export const AppRoute = '/'


const ComponentByRoles = {
  'admin': Admin,
  'user': User,
  'guest': Guest
}

const getUserRole = (params) => ComponentByRoles[params] || ComponentByRoles['guest']


export default function App() {

const { state, dispatch } = useContext(GlobalContext)

const decodeUser = (token) => {
  if (!token) {
    return undefined
  }
  else {
    const res = decodeToken(token)
    console.log(res)
    return res?.role
  }
}

const currentToken = decodeUser(state.token)
const CurrentUser = getUserRole(currentToken)
return <CurrentUser />



}







