import { useParams } from "react-router-dom"
import { IMG_URL_API } from '../constant'
import Shimmer from "./Shimmer"
import useRestaurentList from '../utils/useRestaurentList'
const RestaurentMenu = () => {

    const { id } = useParams()
    const { getMenu,menuItems } = useRestaurentList(id)
 
    //another way 😍
    // if (menuItems.length === 0) return <Shimmer />

    return menuItems.length === 0 ? <Shimmer /> : (

        <div className="restataurentMenuContainer">
            <div>
                {getMenu?.data?.name && <img src={IMG_URL_API + getMenu?.data?.cloudinaryImageId} />}
                <h1>{getMenu?.data?.name}</h1>
            </div>
            <div>
                <ul>
                    {
                        menuItems.map((items, i) => <li key={i}> {items.name}</li>)
                    }
                </ul>
            </div>
        </div>


    )

}


export default RestaurentMenu