import React from 'react'
import './Filter.scss'


const pattern = {
    // backgroundImage: 'url(images/skate-pattern-02.jpg)',
    backgroundSize: '400px',
    mixBlendMode: 'multiply',
    opacity: .4,
    zIndex: -2,

}

const Filter = () => {
    return (
        <div className="Filter">
            <div className="Background" style={pattern}>

                <div className="Pattern" />
                
            </div>
            
        </div>
    )
}

export default Filter;
