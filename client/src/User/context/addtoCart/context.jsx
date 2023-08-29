import React, { createContext, useEffect, useReducer } from 'react'
import { reducer } from './reducer'

export const CartContext = createContext("Initial Value")

const getCartData = () => {
  const data = localStorage.getItem('cart')
  // console.log(data)
  if(data == 'null'){
    return []
  }
  return JSON.parse(data)
}

const initialData = {
  cart: getCartData()
}


export default function CartContextProvider({ children }) {

  const [cart_state, cart_dispatch] = useReducer(reducer, initialData)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart_state.cart))
  }, [cart_state.cart])

  return (
    <CartContext.Provider value={{ cart_state, cart_dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
