import RestaurentList from "./RestaurentList"
import cardsObj from "../constant"
import { useState, useEffect } from "react"

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
const setTimeOut = () => {
    return 
}

export const Body = () => {
    const [restaurants, setRestaurants] = useState(cardsObj)
    const [searchData, setSearchData] = useState('')
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        apiCall()
    }, [])

    async function apiCall() {
        const fetchData = await fetch(URL_API)
        const result = await fetchData.json()
        setApiData(result.data.cards[2].data.data.cards)
        setRestaurants(result.data.cards[2].data.data.cards)
    }

    return (
        <>
            <div className="searchContainer">

                <input type='text' placeholder="search" value={searchData} onChange={
                    (e) => {
                        setSearchData(e.target.value)
                        // let data = filter(searchData, restaurants, apiData)
                        // setRestaurants(data)
                    }
                } />
                <button onClick={() => {
                    let data = filter(searchData, apiData)
                    setRestaurants(data)
                }}>Search</button>
            </div>
            {restaurants.length === 0 ? <h1>No data found</h1> :

                <div className='restaurentContainer'>
                    {
                        restaurants.map((restaurant) => {
                            return <RestaurentList key={restaurant.data.id} {...restaurant.data} />
                        })
                    }
                </div>
            }
        </>
    )
}