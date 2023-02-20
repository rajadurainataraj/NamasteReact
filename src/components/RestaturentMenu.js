import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { ApiUrl } from "../constant"
import { IMG_URL_API } from '../constant'
import { useState } from "react"
import Shimmer from "./Shimmer"
const RestaurentMenu = () => {
    const [getMenu, setGetMenu] = useState({})
    const [menuItems, setMenuItems] = useState([])
    const { id } = useParams()
    useEffect(() => {
        apiCall()
    }, [])
    async function apiCall() {
        const getData = await fetch(ApiUrl + id)
        const result = await getData.json()
        setGetMenu(result)
        setMenuItems(Object.values(result?.data?.menu?.items))
    }

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