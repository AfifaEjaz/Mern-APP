import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useContext } from 'react';
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { CartContext } from '../context/addtoCart/context'

export default function Cartitem({ data }) {

    // const [productQuantity, setproductQuantity] = useState(1)
    const totalPrice = data.price * data.productQuantity


    // console.log(data._id)
    


    const { cart_state, cart_dispatch } = useContext(CartContext)

    const deleteItem = (item) => {
        console.log(item)

        cart_dispatch(
            {
                type: "DELETE_ITEM",
                payload: item
            }
        )
    }

    return (
        <>
            <Card className='mb-3 shadow-sm border border-dark'>
                <div className="row g-0">

                    <div className="col-md-4">
                        <img className='img-fluid rounded-start p-2'
                            src={data.thumbnail} alt=""
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'fill'
                            }} />
                    </div>
                    <div className="col-md-8">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="card-title">
                                    <strong>{data.name}</strong>
                                    <div>{data.description.substring(0, 44)}</div>
                                </div>
                                <button className='btn btn-light align-self-start '
                                    onClick={() => deleteItem(data._id)}>< RxCross1 /></button>
                            </div>

                            <div className="">
                                
                                <div>Price:<strong> {data.price}$</strong> </div>
                                <span>Quantity: <strong>{data.productQuantity}</strong></span>
                                <div className="card-price">
                                    <span>Total price:<strong> {totalPrice}$</strong></span>
                                </div>
                            </div>
                        </Card.Body>
                    </div>

                </div>
            </Card>
        </>
    )
}
