import React from 'react'
import './GridProducts.scss'
import CardSkate from '../CardSkate/CardSkate'

const GridProducts = () => {
    return (
        <div className="container m-o p-0">

            <div className="CardContainer">
                    
                <CardSkate /> 
                <CardSkate />
                <CardSkate />
                <CardSkate />
                
            </div>
            
        </div>
    )
}

export default GridProducts;
