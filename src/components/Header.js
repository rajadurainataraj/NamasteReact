import { FaDivide, FaBullseye, FaUserAlt, FaCartPlus, FaStar,FaLockOpen } from "react-icons/fa";
import { IMG_URL_LOGO } from "../constant";
export const Header = ({ loggedIn }) => {
    let message = false;
    return (
        <div className='headerContainer'>
            <a href='/'>
                <img className='logo' src={IMG_URL_LOGO}  alt='logo' />
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
                <div className='navItems'>
                    <FaLockOpen></FaLockOpen>
                    <li> <button onClick={()=>loggedIn(message)}>LogOut</button> </li>
                </div>
            </ul>

        </div>
    )

}
