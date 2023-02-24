import RestaurentList from "./RestaurentList"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import { filter } from "../utils/helper"
import useFetchApiData from "../utils/useFetchApiData"
import useOnline from '../utils/useOnline'

export const Body = () => {
    
    const { delayState, apiData, restaurants, searchData, setSearchData, setRestaurants } = useFetchApiData()
    
    if (!useOnline()) return <h1>💔 offline,Check your internet connection</h1>

    if (delayState) return <Shimmer />

    //  anotherway ====> if (apiData) return <Shimmer />
    return (
        <>
            <div className="searchContainer">

                <input type='text' placeholder="search" value={searchData} onChange={
                    (e) => {
                        setSearchData(e.target.value)
                        setRestaurants(filter(e.target.value, apiData))
                    }
                } />
                <button className='btn-search' onClick={() => {
                    let data = filter(searchData, apiData)
                    setRestaurants(data)
                }}>Search</button>
            </div>

            {
                restaurants.length === 0 && delayState === false ? <h1>No data found</h1> :

                    <div className='restaurentContainer'>
                        {
                            restaurants.map((restaurant) => {

                                return <Link to={"/restaurentmenu/" + restaurant.data.id} key={restaurant.data.id} > <RestaurentList  {...restaurant.data} /> </Link>
                            })
                        }
                    </div>
            }
        </>
    )
}