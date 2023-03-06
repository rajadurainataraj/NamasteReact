import { useSelector, useDispatch } from "react-redux"
import CartItem from "./CartItem"
import { clearItem } from "../utils/cartSlice"


const Cart = () => {

    const dispatch = useDispatch()
    const clearItems = () => {
        dispatch(clearItem())
    }
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)

 
    return cartItems.length == 0 ? <div>Your card is emty</div> : (

        <div>

            {cartItems.map(item => <div key={item.id}> <CartItem {...item} /> </div>)}

            
            {cartItems.length != 0 && <div className="flex  justify-center text-center"><button className='items-center bg-red-700 px-2 text-white p-2 justify-center align-middle ' onClick={() => clearItems()}>Clear Cart</button></div>}

        </div>
    )
}
export default Cart