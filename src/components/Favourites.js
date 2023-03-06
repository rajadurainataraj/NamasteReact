import { useSelector,useDispatch } from "react-redux"
import CartItem from "./CartItem"
import RestaurentList from "./RestaurentList"
import { IMG_URL_API } from "../constant"
import { FaStar } from "react-icons/fa"
import { removeFavItem } from "../utils/favSlice"

const Favourites = () => {
    
    const favItems = useSelector(store => store.favItems.items)
    const dispatch = useDispatch()
    console.log("fav", favItems)
    const handleFav = (id) => {
        dispatch(removeFavItem(id))
        console.log(id)
        
    }
    // const {name,cloudinaryImageId,price}= items.id
    return (
        
        // <div>
        //      {favItems.map((item,i) => <div key={i} className='flex'> <RestaurentList className="flex"  {...item.data} /> </div>)}
        // </div>
        <div className='flex'>
            {favItems.map((item, i) => {
                //   const {name,cloudinaryImageId,price,avgRating} = item.data
              return ( <div className='m-5 w-64 shadow-lg p-3 overflow-hidden'>
                  <div className="flex">  
                  <img className='w-40 rounded-lg hover:scale-105'
                          src={IMG_URL_API + item.data.cloudinaryImageId} alt='cardimg' />
                      <button className="flex justify-start" onClick={()=>handleFav(item.data.id)}>❤</button>
                      </div>
                    <div className="flex">
                        <h3 >{item.data.name}</h3>
                    </div>
       
                    <h5 className=''>{item.data.cuisines.slice(0, 5).join(', ')}</h5>
                    <span className={Number(item.data.avgRating) >= 4 ? 'starIcon' : Number(avgRating) > 1 ? 'starIconLowRating' : ''}> <FaStar /> {item.data.avgRating} </span>
                    <h5 className='promptTxt'>QUICKVIEW</h5>
                </div>)
            })
            }
            </div>
    )
}
export default Favourites