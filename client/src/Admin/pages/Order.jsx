import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import OrderUpdate from '../components/OrderUpdate'

export default function Order() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/all-orders')
      .then((response) => {
        setOrders(response.data.orders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])


  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center bg-dark p-2 my-3 rounded">
          <span className='fs-4 fw-bold text-white'>Orders</span>
        </div>
        <div className="container">
          <table className="table">
            <thead>

              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Address</th>
                <th>Shipping</th>
                <th>Total Bill</th>
                <th>Status</th>
                <th>Message</th>
                <th>Item Details</th>
                <th >Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map((order, orderIndex) => (
                  <tr key={orderIndex}>
                    <td>{order._id}</td>
                    <td>{order.customerName}</td>
                    <td>{order.customerAddress}</td>
                    <td>Shipping: 100$</td>
                    <td>{order.totalBill}</td>
                    <td>{order.Status}</td>
                    <td>{order.Message}</td>
                    <td>
                      <ul>
                        {
                          order.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <div>product name: {item.name}</div>
                              <div>Price: {item.price}</div>


                              <div>Quantity: {item.productQuantity}</div>


                            </li>
                          ))
                        }
                      </ul>
                    </td>
                    <td><OrderUpdate ID={order._id} recallData={setOrders} /></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
