import { FaDivide, FaBullseye, FaUserAlt, FaCartPlus, FaStar, FaLockOpen, FaInfo, FaHeartbeat } from "react-icons/fa";
import { IMG_URL_LOGO } from "../constant";
import { Link } from 'react-router-dom'
import { useState, lazy } from "react";
import useOnline from '../utils/useOnline'

export const Header = ({ loggedIn }) => {
    // const [count, setCount] = useState(0)
    let message = false;

    return (
        <div className='headerContainer'>
            <a href='/'>
                <img className='logo' src={IMG_URL_LOGO} alt='logo' />
            </a>
            {/* {count} */}
            {/* <button onClick={()=>{setCount((count) => count +1)} }>button</button> */}
            <ul className='navContainer'>
                <Link to='/aboutus'>
                    <div className='navItems'>
                        <FaInfo></FaInfo>
                        <li>AboutUs</li>
                    </div>
                </Link>
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
                <div className='navItems'>
                    <FaLockOpen></FaLockOpen>
                    <li> <button onClick={() => loggedIn(message)}>LogOut</button> </li>
                </div>
                <Link to='/Instamart'>
                    <div className='navItems'>
                        <FaLockOpen></FaLockOpen>
                        <li>Instamart</li>
                    </div>
                </Link>
                <div className='navItems'>
                    {useOnline() ?
                        <li> online </li>
                        : <li> offline </li>}
                </div>


            </ul>

        </div>
    )

}
