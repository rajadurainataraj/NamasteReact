import { useEffect, useState } from "react";


const ColorChangeTask = () => {

    const handleClick = (e) => {
        return e.currentTarget.style.backgroundColor === 'red' ? e.currentTarget.style.backgroundColor = '' : e.currentTarget.style.backgroundColor = 'red';
    }

    return (
        <div className="containerTask">
            <div className="mediumContainer">
                <div className='colorOrange' onClick={(e) => handleClick(e)}></div>
                <div className='colorOrange' onClick={(e) => handleClick(e)}></div>
            </div>
        </div>
    )
}
export default ColorChangeTask