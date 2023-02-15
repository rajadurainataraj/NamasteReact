import { FaStar } from "react-icons/fa";
const RestaurentList = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    return (       
        <div className='card'>
            <img className='cardBarger'
                src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId
                } alt='cardimg' />
            <h3 >{name}</h3>
            <h5 className='cusino'>{cuisines.join(', ')}</h5>
            <span className={Number(avgRating) >= 4 ? 'starIcon' : Number(avgRating) > 1 ? 'starIconLowRating' : ''}> <FaStar /> {avgRating} </span>
            <h5 className='promptTxt'>QUICKVIEW</h5>
            </div>
    )
}
export default RestaurentList;