import React from 'react'

export default function Card({title, description, price}) {

    return(
        <div className='product-card'>
            <h2>{title}</h2>
            <h2>{description}</h2>
            <h2>{price}</h2>
        </div>
    )
}