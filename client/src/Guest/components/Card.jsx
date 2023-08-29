import React from 'react'
import './Card.css'

function Card() {
    return (
        <div class="card">
            <p class="heading">Card Hover</p>
            <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p><div class="overlay"></div>
            <button class="card-btn">Learn more!</button>
        </div>
    )
}

export default Card