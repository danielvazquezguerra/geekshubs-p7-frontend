import React from 'react'
import './CardSkate.scss'



const CardSkate = ({ product }) => {

    

    return (
        <div className="CardSkate">

            <img className="SkateImg" src={product.image_path[0]} alt="" />

            <div className="SkateInfo">
                <h5>{product.name}</h5>
                <p>{product.price}</p>

            </div>


            
        </div>
    )
}

export default CardSkate;
