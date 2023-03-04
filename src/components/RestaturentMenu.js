import { useParams } from "react-router-dom"
import { IMG_URL_API } from '../constant'
import Shimmer from "./Shimmer"
import useRestaurentList from '../utils/useRestaurentList'

const RestaurentMenu = () => {

    const { id } = useParams()
    const { getMenu, menuItems } = useRestaurentList(id)
    const nonveg = "https://m.media-amazon.com/images/I/31KiTfpLyFL.jpg"
    const veg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Op9gLt_Lw6VAa_9kJGdZYdRxh7Z72LXzpA&usqp=CAU"
    const img_not_avail = "data:image/png;base64,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"
    //another way 😍
    // if (menuItems.length === 0) return <Shimmer />
    console.log(getMenu)

    return menuItems.length === 0 ? <Shimmer /> : (

        <div className="">
            <div className="bg-yellow-100 flex p-10">
                {getMenu?.data?.name && <img className="h-36" src={IMG_URL_API + getMenu?.data?.cloudinaryImageId} />}
                <div className="m-5">
                    <h1>{getMenu?.data?.name}</h1>
                    <h2>{getMenu?.data?.cuisines.map(item => item)}</h2>
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
                    <h2>{getMenu?.data?.aggregatedDiscountInfo?.descriptionList.map(item => <div className="flex-col" ><h3 className="flex-col">{item.meta}</h3></div>)}</h2>
                </div>
            </div>
            <div className="flex pt-5">
                <div className="mr-5 pl-10">{getMenu?.data?.menu?.widgets.map(item => <h5 className="hover:text-orange-500 cursor-pointer">{item.name}</h5>)}
                </div>
                <div>
                    <ul>
                        {
                            menuItems.map((items, i) =>
                                <li key={i}><div className="flex mb-10 justify-between">
                                    <div className="mr-48"><div>{<img className='w-7' src={items.attributes.vegClassifier === "VEG" ? veg : nonveg} />}</div>
                                    <div> {items.name} </div>  <div>₹{items.price / 100} </div></div>
                                    <div className="flex-col items-end bg-slate-400"><img className="w-36" src={IMG_URL_API + items.cloudinaryImageId}></img><button className="text-green-600 font-bold w-36 py-1 border-2 border-gray-300  bg-white">ADD</button></div></div> </li>)
                        }

                    </ul>
                </div>
            </div>
        </div>


    )

}


export default RestaurentMenu