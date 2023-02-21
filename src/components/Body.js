import RestaurentList from "./RestaurentList"
import cardsObj from "../constant"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"

const URL_API = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.009496&lng=76.945033&page_type=DESKTOP_WEB_LISTING'

function filter(searchData, apiData) {
    if (searchData === '') {
        return apiData
    } else {
        let filterData = apiData.filter(item => {
            return item.data.name.toLowerCase().includes(searchData.toLowerCase())
        })
        console.log(filterData, "rest")
        return filterData
    }
}


export const Body = () => {
    const [restaurants, setRestaurants] = useState([])
    const [searchData, setSearchData] = useState('')
    const [apiData, setApiData] = useState([])
    const [delayState, setDelayState] = useState(true)


    useEffect(() => {
        console.log('outside')
        setTimeout(() => {
            setDelayState(false)
            console.log('inside settimeout')
        }, 2000)
        apiCall()
    }, [])

    async function apiCall() {
        const fetchData = await fetch(URL_API)
        const result = await fetchData.json()
        setApiData(result.data.cards[2].data.data.cards)
        setRestaurants(result.data.cards[2].data.data.cards)
    }

    console.log("render")
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

                                return <Link to={"/restaurentmenu/" + restaurant.data.id} key={restaurant.data.id} > <RestaurentList key={restaurant.data.id} {...restaurant.data} /> </Link>
                            })
                        }
                    </div>
            }
        </>
    )
}