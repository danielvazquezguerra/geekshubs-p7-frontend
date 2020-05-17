import React, { Component } from 'react'
import './ProductsDetails.scss';
import { connect } from 'react-redux'; 
import axios from 'axios';
import { API_URL } from '../../../api-config';


class ProductsDetails extends Component {

    constructor(props) {

        super(props);
        this.state = {
            product: {},
            user:{}
        }
        
    }

    componentDidMount() {   
        const { _id } = this.props.match.params;//extraemos el parámetro _id de la ruta
        axios.get(API_URL + '/skateboards/' + _id)//hacemos la petición para obtener ese producto en detalle
        .then(res => this.setState({ product: res.data }))//actualizamos el estado acorde a la respuesta del servi
        
    }
    
    render() {
        return (
           
        <div className="ProductDetail">

            <section className="MainLeft">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
            <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>

  </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
                </a>
        </div>

            </section>



            <section className="MainRight">

    <h3 className="ProductName">{}Bright Navy 22 "</h3>
                <p className="ProductPrice">122.54</p>
                <button className="AddCart">Add to Cart</button>
                <p className="ProductDescription">Esto es la descripcion del producto, pero mas largo</p>


            </section>


            
        </div>










        )
    }
}
   const  mapStateToProps = (state) => ({ user:state.user })
   export default connect(mapStateToProps)(ProductsDetails);