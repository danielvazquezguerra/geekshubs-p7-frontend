import React from 'react'
import './GridProducts.scss'
import { connect } from 'react-redux';
import CardSkate from '../CardSkate/CardSkate'
import { getProducts } from '../../../redux/actions/actions'
import { useEffect } from 'react'

const GridProducts = (props) => {
    console.log(props);
    useEffect(() => {
        getProducts()
        .catch(console.error)
     }, [])
    
    return (
        <div className="container m-o p-0">

            <div className="CardContainer">
                    
                {props.products?.filter(product => props.search ? product.name.includes(props.search):true).map(product => <CardSkate key={product._id} product={product}/>)}
                
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({products:state.products , search:state.search})
export default connect(mapStateToProps) (GridProducts);
