import React, { useState, useEffect, useContext } from 'react'
import HomeNavigation from '../components/HomeNavigation'
import ImageSection from '../components/ImageSection'
import CategoryMenu from '../components/CategoryMenu'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/addtoCart/context'
import { MdOutlineHighQuality } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
import { AiOutlineFileDone } from 'react-icons/ai'

import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import axios from 'axios'


export default function SingleProductPage() {

    const { productName } = useParams()


    const [singleProduct, setSingleProduct] = useState({})
    const [productQuantity, setProductQuantity] = useState(1)
    const [comment, setComment] = useState("")
    const [ratingstar, setRatingstar] = useState(0)

    // console.log(productQuantity)

    const { cart_state, cart_dispatch } = useContext(CartContext)

    useEffect(() => {
        axios.get(`/api/productbyname?name=${productName}`)
            .then(json => setSingleProduct(json.data.product))
            .catch((error) => console.log(error.message))
    }, [])

    // console.log(singleProduct._id)
    // console.log(singleProduct)
    // console.log(cart_state.cart)

    const submitReview = () => {
        const payload = {
            productName: productName,
            review: comment,
            rating: ratingstar
        }
        console.log(payload)
       
        Swal.fire({
            title: 'Successfully Submitted!',
            text: 'Thanks for Reviewing!',
            icon: 'success',
            confirmButtonText: 'Continue Shopping',

        })
         setComment("");
        setRatingstar(0);

        
    }

    const ratingChanged = (newRating) => {
        setRatingstar(newRating)
    }

    const addToCart = (item) => {
        const payload = { ...item, productQuantity }
        console.log(payload)
        cart_dispatch(
            {
                type: "ADD_TO_CART",
                payload
            }
        )
    }

    return (
        <>
            <HomeNavigation />

            {/* Categories Display */}
            <CategoryMenu />


            <div className="container d-flex justify-content-center align-items-center" style={{ height: '100%', width: '100%' }}>

                <div className="container row mt-5">
                    <div className="col-md-6">

                        {
                            singleProduct?.images?.length > 0 && <ImageSection images={singleProduct.images} />

                        }

                    </div>
                    <div className="col-md-6 mt-4">
                        <div className='container'>
                            <div className="mb-5 mt-4">
                                <h4>{singleProduct.name} - {singleProduct.price}$</h4>
                                <p className="text-secondary">{singleProduct.description}</p>
                                {/* <div className='d-flex align-items-center'>
                                    <span >
                                        Ratings:
                                    </span>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        // edit={true}
                                        value={singleProduct.rating}
                                        color2={'#ffd700'} />
                                </div> */}
                                <div><strong>Category: </strong>
                                    <span className='ms-2'>{singleProduct.category}</span>
                                </div>
                                <div>
                                    <strong>Brand:</strong>
                                    <span className='ms-2'>{singleProduct.brand}</span>
                                </div>
                                <div><strong>Shipping: </strong>
                                    <span className='ms-2'>100$</span>
                                </div>
                                <strong>30 Days Guarantee</strong> <br />
                                <strong>1 Year Warranty</strong>

                                <div className="row">
                                    <div className='col-md-2 fs-1'><MdOutlineHighQuality /></div>
                                    <div className='col-md-2 fs-1'><TbTruckDelivery /></div>
                                    <div className='col-md-2 fs-1'><AiOutlineFileDone /></div>
                                </div>



                                <div className="border-top w-30 mt-4">
                                    <label className='my-3 mx-3'>Quantity:<button onClick={() => setProductQuantity(productQuantity - 1)} disabled={productQuantity > 1 ? false : true} className="btn btn-secondary mx-3">-</button>{productQuantity}<button onClick={() => setProductQuantity(productQuantity + 1)} className="btn btn-secondary ms-3">+</button></label>

                                    <button onClick={() => addToCart(singleProduct)} disabled={cart_state.cart.some(item => item._id === singleProduct._id)} className="btn btn-secondary w-50 mx-1">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    {/* <div className="d-flex justify-content-center align-items-center gap-5">
                       
                    </div> */}
                    <div className="row gap-5">
                        <div className='col-md-5 mx-4'>
                            <h1 className=" ">Please Submit a Review</h1>
                            <p className="text-secondary ">Because Your Review Matters</p>

                            <div className=''>
                                Your Overall rating:
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={ratingstar}
                                            onChange={ratingChanged}
                                            color2={'#ffd700'} />
                                        <span className=''>
                                            ({ratingstar})
                                        </span>
                                    </div>


                                </div>
                            </div>

                            <div className="form-floating mt-3"> YOUR REVIEW*
                                <textarea
                                type='text'
                                    className="form-control mt-2"
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea2"
                                    style={{ height: 60 }}
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />

                                <div>
                                    <button className='btn btn-secondary mt-3 text-left' onClick={submitReview}>Submit review</button>
                                </div>
                            </div>

                            <h5 className='mt-3'>Delivery details:</h5>
                            <p>Please note that your order will be dispatched within 48 - 72 hours.</p>
                        </div>
                        <div className='col-md-5'>

                            <img className='img-fluid' style={{ height: '40vh' }} src="https://img.freepik.com/free-vector/website-rating-feedback-review_1325-442.jpg?size=338&ext=jpg" alt="" />

                        </div>
                    </div>


                </div>

            </div>

        </>

    )
}
