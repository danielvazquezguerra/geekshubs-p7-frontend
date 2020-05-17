import React from 'react'
import './CardSkate.scss'
import { Link } from 'react-router-dom'



const CardSkate = ({ product }) => {

    

    return (
        <div className="CardSkate">
            <Link className="product" key={product._id} to={'/skateboards/' + product._id }>
            <img className="SkateImg" src={product.image_path[0]} alt="" />

            <div className="SkateInfo">

                <h5>{product.name}</h5>
                <p>{product.price}</p>
         
            </div>


            </Link>
        </div>
    )
}

export default CardSkate;
