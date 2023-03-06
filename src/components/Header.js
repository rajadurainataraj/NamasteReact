import { FaDivide, FaBullseye, FaUserAlt, FaCartPlus, FaCartArrowDown, FaLockOpen, FaInfo, FaHeartbeat,FaHeart } from "react-icons/fa";
import { IMG_URL_LOGO } from "../constant";
import { Link } from 'react-router-dom'
import { useState, lazy, useContext } from "react";
import useOnline from '../utils/useOnline'
import userContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearItem } from "../utils/cartSlice";


export const Header = ({ loggedIn }) => {
    // const [count, setCount] = useState(0)
    let message = false;
    const { user } = useContext(userContext)
    const cartItems = useSelector((store) => { return store.cart.items })
    const dispatch = useDispatch()
    const handler = () => {
        dispatch(addItem("graphs"))
    }
    const clear = () => {
        dispatch(clearItem())
    }
    return (
        <div className="flex bg-slate-100 justify-between text-center"  >
            <Link to='/'>
                <img className='h-12 m-5' src={IMG_URL_LOGO} alt='logo' />
            </Link>
            {/* {count} */}
            {/* <button onClick={()=>{setCount((count) => count +1)} }>button</button> */}
            <ul className='flex justify-center items-center text-center'>
                {/* <button className="p-2 m-2 bg-green-100" onClick={() => handler()}>add Items</button>
                <button className="p-2 m-2 bg-green-100" onClick={()=>clear()}>clear Items</button> */}
                <Link to='/aboutus'>
                    <div className='flex pr-6 text-center justify-center align-middle'>
                        <div><FaInfo className="mt-1" ></FaInfo></div>
                        <div> <li className="text-center pl-1 ">AboutUs</li></div>

                    </div>
                </Link>
                {/* <div className='flex pr-6 justify-center align-middle'>
                    <FaDivide className="mt-1"></FaDivide>
                    <li className="text-center pl-1">Offers</li>
                </div> */}
                {/* <div className='flex pr-6'>
                    <FaBullseye className="mt-1"></FaBullseye>
                    <li className="text-center pl-1">Help</li>
                </div> */}
                <div className='flex pr-6'>
                    <FaUserAlt className="mt-1"></FaUserAlt>
                    <li className="text-center pl-1">Rajadurai</li>
                </div>
                <Link to='/Cart'>
                    <div className='flex pr-6'>
                        <FaCartPlus className="mt-1"></FaCartPlus>
                        <li className="text-center pl-1">Cart  - {cartItems.length}</li>
                    </div>
                </Link>
                <Link to='/Instamart'>
                    <div className='flex pr-6'>
                        <FaCartArrowDown className="mt-1"></FaCartArrowDown>
                        <li className="text-center pl-1">Instamart</li>
                    </div>
                </Link>
                {/* {user.userName + user.password} */}
                <div className='flex pr-6'>
                    <FaLockOpen className="mt-1"></FaLockOpen>
                    <li className="text-center pl-1"> <button onClick={() => loggedIn(message)}>LogOut</button> </li>
                </div>
                <Link to="/Favourites">
                <div className='flex pr-6'>
                    <FaHeart className="mt-1"></FaHeart>
                    <li className="text-center pl-1">Favourites</li>
                    </div>
                    </Link>
                <div className='flex mr-6'>
                    {useOnline() ?
                        <li>🟢 online </li>
                        : <li>🔴 offline </li>}
                </div>


            </ul>

        </div>
    )

}
