import React, { useState } from 'react'
import { useEffect } from 'react';

function ImageSection({ images }) {

    const [img, setImg] = useState(images[0] ? images[0] : null);

    const changeImage = (index) => {
        setImg(images[index])
    }


    return (
        <>
            <div className="d-flex align-items-center">

                <div className='bg-light p-1 mb-5 mt-5'>
                    {
                        images?.map((val, key) =>
                            <div key={key} style={{ height: '17vh' }} className={img == images[key] ? ('opacity-25 p-1') : (null)} >
                                <img style={{ height: '16vh', width: '100%' }} onClick={() => changeImage(key)} key={key} className='img-fluid' src={val} alt={`img-${key}`} />
                            </div>)
                    }
                </div>

                <div className="container w-85 text-center">
                    <img className='img-fluid mb-4 mt-4 ' style={{ height: '50vh', width: '100%' }} src={img} alt='' />
                </div>



            </div>
        </>
    )
}

export default ImageSection