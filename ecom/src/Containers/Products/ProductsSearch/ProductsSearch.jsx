import { Input } from 'antd';
import React from 'react'
import './ProductSearch.scss'
import { Select } from 'antd';
import { connect } from 'react-redux';


const ProductSearch = (props) => {
    
    const { Option } = Select;
    
    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    const { Search } = Input;


    return (
        <div className="ProductSearch">

            <h3>ARE YOU READY?</h3>
            <p>This collection has got you coloured with the most on-trend colours in classic designs</p>

        <Search onKeyUp={event => props.dispatch({type:'SEARCH', payload: event.target.value})} className="InputSearch" placeholder="Keep on rolling, baby!" />

        <Select defaultValue="lucy" onChange={handleChange}>
            <Option value="jack">Skateboards 22"</Option>
            <Option value="lucy">Longboards 36"</Option>
        </Select>
            
        </div>
    )
}


const mapStateToProps = (state) => ({products:state.products})
export default connect(mapStateToProps) (ProductSearch);