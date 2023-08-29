import React from 'react'
import './Loader.css'

export default function Loader() {
    return (
        <>
        <div className=' main d-flex justify-content-center align-items-center' style={{height:'30vh'}}>
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            </div>
        </>
    )
}
