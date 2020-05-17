import { Input } from 'antd';
import React from 'react'
import './ProductSearch.scss'
import { Select } from 'antd';



const ProductSearch = () => {
    
    const { Option } = Select;
    
    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    const { Search } = Input;


    return (
        <div className="ProductSearch">

            <h3>ARE YOU READY?</h3>
            <p>This collection has got you coloured with the most on-trend colours in classic designs</p>

        <Search className="InputSearch" placeholder="Keep on rolling, baby!" onSearch={value => console.log(value)} />

        <Select defaultValue="lucy" onChange={handleChange}>
            <Option value="jack">Skateboards 22"</Option>
            <Option value="lucy">Longboards 36"</Option>
        </Select>
            
        </div>
    )
}


export default ProductSearch;