import { IMG_URL_API } from '../constant';
import { useDispatch,useSelector } from 'react-redux';
import { removeItem} from '../utils/cartSlice';

const CartItem = ({ name, cloudinaryImageId, price,id }) => {
    const dispatch = useDispatch()
    // const cartItems = useSelector(store => store.cart.items)
    const removesItem = (id) => {
       return console.log("clicked"), dispatch(removeItem(id))
    }
  
    console.log(name, cloudinaryImageId, price);
    return (
        <div className='flex justify-between border border-gray-600 p-2 m-3'>
            <img className="w-24" src={IMG_URL_API + cloudinaryImageId} alt={name} />
            <div className='flex flex-col items-center'>
                <div>{name}</div>
                <div>₹{price / 100}</div>
            </div>
            <button className='bg-red-700 px-2 text-white' onClick={() => removesItem(id)}>remove Item</button>
        </div>
    )
}
export default CartItem