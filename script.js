import React from 'react';
import ReactDOM from "react-dom/client";
import { FaDivide, FaBullseye, FaUserAlt, FaCartPlus, FaStar } from "react-icons/fa";
import hunt from './assets/images/hunt.jpg';
import cardsObj from './data';

const Header = () => {
    return (
        <div className='headerContainer'>
            <a href='/'>
                <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7BguUEknUW4VdwbKOIW81Etx9VnV74qklrg&usqp=CAU' alt='logo' />
                </a>

            <ul className='navContainer'>
                <div className='navItems'>
                    <FaDivide></FaDivide>
                    <li>Offers</li>
                </div>
                <div className='navItems'>
                    <FaBullseye></FaBullseye>
                    <li>Help</li>
                </div>
                <div className='navItems'>
                    <FaUserAlt></FaUserAlt>
                    <li>Rajadurai</li>
                </div>
                <div className='navItems'>
                    <FaCartPlus></FaCartPlus>
                    <li>Cart</li>
                </div>
            </ul>

        </div>
    )

}

const RestaurentList = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    console.log(typeof Number(avgRating))
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
const Body = () => {
    return (
        <div className='restaurentContainer'>
            {
                cardsObj.map((restaurant) => {
                    return <RestaurentList key={restaurant.data.id} {...restaurant.data} />
                })
            }
        </div>
    )

}
const Footer = () => {
    return (
        <div>
            <h2>Footer</h2>
            <h3>Footer</h3>
        </div>
    )
}

const Restaurent = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< Restaurent />)





