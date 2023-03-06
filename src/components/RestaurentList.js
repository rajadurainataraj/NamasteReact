import { FaStar } from "react-icons/fa";
import { IMG_URL_API } from '../constant';
import { useState } from "react";

const RestaurentList = ({ cloudinaryImageId, name, cuisines, avgRating }) => {

    return (
        <div className='m-5 w-64 shadow-lg p-3 '>
            <img className='rounded-lg hover:scale-105 overflow-hidden'
                src={IMG_URL_API + cloudinaryImageId} alt='cardimg' />
            <div className="flex">
            <h3 >{name}</h3> 
            </div>
           
            <h5 className=''>{cuisines.slice(0,5).join(', ')}</h5>
            <span className={Number(avgRating) >= 4 ? 'starIcon' : Number(avgRating) > 1 ? 'starIconLowRating' : ''}> <FaStar /> {avgRating} </span>
            <h5 className='promptTxt'>QUICKVIEW</h5>
        </div>
    )
}
export default RestaurentList;