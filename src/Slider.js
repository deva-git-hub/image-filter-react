import React from 'react'

function Slider({min,max,handleChange,value}) {
    return (
        <div className="slider-container">
           <input type="range" className="slider"
           min={min}
           max={max}
           value={value}
           onChange={handleChange}/>
        </div>
    )
}

export default Slider
