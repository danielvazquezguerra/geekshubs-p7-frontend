import React from 'react'
import './Products.scss'
import ProductSearch from './ProductsSearch/ProductsSearch.jsx'
import GridProducts from './Grid Products/GridProducts'


const Products = () => {
    return (
        <div className="Products">

            <section className="ProductsLeft">

                <ProductSearch />

            </section>
            <section className="ProductsRight container-fluid p-3">

                <GridProducts />

            </section>
            
        </div>
    )
}

export default Products;
