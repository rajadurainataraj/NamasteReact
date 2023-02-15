import { FaDivide, FaBullseye, FaUserAlt, FaCartPlus, FaStar } from "react-icons/fa";
import { IMG_URL_LOGO } from "../constant";
export const Header = () => {
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
            </ul>

        </div>
    )

}
