import { useContext } from "react"
import RestaurentList from "./RestaurentList"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import { filter } from "../utils/helper"
import useFetchApiData from "../utils/useFetchApiData"
import useOnline from '../utils/useOnline'
import { IMG_URL_API } from "../constant"
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carosals } from './Carosal';
import UserContext from "../utils/UserContext"


export const Body = () => {

    const { delayState, apiData, restaurants, searchData, setSearchData, setRestaurants, carosal } = useFetchApiData()
    const { user, setUser } = useContext(UserContext)
    if (!useOnline()) return <h1>💔 offline,Check your internet connection</h1>

    if (delayState) return <Shimmer />


    // console.log(user)
    //  anotherway ====> if (apiData) return <Shimmer />
    return (
        <>
            <div className="flex justify-center items-center p-5 ">

                <input type='search' className="w-10/12 p-2 border-2" placeholder="search" value={searchData} onChange={
                    (e) => {
                        setSearchData(e.target.value)
                        setRestaurants(filter(e.target.value, apiData))
                    }
                } />

                <button className='bg-green-300 px-5 py-3 text-white ml-2 rounded-md' onClick={() => {
                    let data = filter(searchData, apiData)
                    setRestaurants(data)
                }}>Search</button>

                <input type='text' value={user.userName} onChange={(e) => setUser({
                    ...user,
                    userName: e.target.value
                })} />

            </div>

            {/* <Carosals /> */}

            {/* <Carousel>
                <div className="carosalContainer">
                    {carosal.map(item => {
                        return <div className="carosalCard"> <img src={IMG_URL_API + item.data.creativeId}></img> </div>
                    })
                    }
                </div>
            </Carousel> */}


            {console.log(restaurants.length)}
            {

                restaurants.length === 0 && delayState === false ? <h1>No data found</h1> :
                    searchData.length < 3 ? <h1>type minimum 3 letters</h1> :

                        <div className='flex-wrap flex  justify-center'>
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