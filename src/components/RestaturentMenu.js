import { useParams } from "react-router-dom"
import { IMG_URL_API } from '../constant'
import Shimmer from "./Shimmer"
import useRestaurentList from '../utils/useRestaurentList'
import { addItem } from "../utils/cartSlice"
import { VEG, NON_VEG } from "../constant"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addFavItem,removeFavItem } from "../utils/favSlice"


const RestaurentMenu = () => {
    const favItems = useSelector(store => store.favItems.items)
   

    const { id } = useParams()
    const { getMenu, menuItems } = useRestaurentList(id)
  
    // const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch()
    //another way 😍
    // if (menuItems.length === 0) return <Shimmer />
    // console.log(getMenu)

    const handleItem = (item) => {
        dispatch(addItem(item))
    }
    const handleFavItem = (menu) => {
        console.log(menu)
        dispatch(addFavItem(menu))
    }
    const removeFavItems = (menu) => {
        dispatch(removeFavItem(menu))
    }

    const [fav, setFav] = useState("🤍")
    
    const favourites = (menu) => {
        // const getMenuArray = Object.values(getMenu)
        if (fav === "🤍") {
            setFav("❤")
            handleFavItem(menu)
            console.log(favItems)
        } else {
            setFav("🤍")
            removeFavItems(menu)
         
            // console.log(getData)
       }
    }
  
    return menuItems.length === 0 ? <Shimmer /> : (

        <div className="">
            <div className="bg-yellow-100 flex p-10">
                {getMenu?.data?.name && <img className="h-36" src={IMG_URL_API + getMenu?.data?.cloudinaryImageId} />}
                <div className="m-5">
                    <div className="flex">
                        <h1>{getMenu?.data?.name}</h1>
                        <h3 className="pl-2 cursor-pointer" onClick={()=>favourites(getMenu)}>{fav}</h3>
                    </div>
              
                    <h2>{getMenu?.data?.cuisines.map((item, i) => <div key={i}>{item}</div> )}</h2>
                    <h2>{getMenu?.data?.locality + "," + getMenu?.data?.area}</h2>
                    <div className="flex">
                        <div>
                            <h2>⭐ {getMenu?.data?.avgRating} </h2>
                            <h2>{getMenu?.data?.totalRatingsString}</h2>
                        </div>
                        <div className="ml-4">
                            <h2>{getMenu?.data?.sla?.slaString.toLowerCase()}</h2>
                            <h2>deliveryTime</h2>
                        </div>

                        <div className="ml-4">
                            <h2> {getMenu?.data?.costForTwo / 100} </h2>
                            <h2> {getMenu?.data?.costForTwoMsg} </h2>
                        </div>

                    </div>

                </div>
                <div className="flex flex-col justify-center border-2 border-gray-600 p-4">
                    <h1>OFFER</h1>
                    <h2>{getMenu?.data?.aggregatedDiscountInfo?.descriptionList.map((item,i) => <div key={i} className="flex-col" ><h3 className="flex-col">{item.meta}</h3></div>)}</h2>
                </div>
            </div>
            <div className="flex pt-5">
                <div className="mr-5 pl-10">{getMenu?.data?.menu?.widgets.map((item,i) => <h5 key={i} className="hover:text-orange-500 cursor-pointer">{item.name}</h5>)}
                </div>
                <div>
                    <ul>
                        {
                            menuItems.map((items, i) =>
                                <li key={i}><div className="flex mb-10 justify-between">
                                    <div className="mr-48"><div>{<img className='w-4' src={items.attributes.vegClassifier === "VEG" ? VEG : NON_VEG} />}</div>
                                        <div> {items.name} </div>  <div>₹{items.price / 100} </div></div>
                                    <div className="flex-col items-end bg-slate-400"><img className="w-36" src={IMG_URL_API + items.cloudinaryImageId}></img><button className="text-green-600 font-bold w-36 py-1 border-2 border-gray-300  bg-white" onClick={() => handleItem(items)}>ADD</button></div></div> </li>)
                        }

                    </ul>
                </div>
            </div>
        </div>


    )

}


export default RestaurentMenu