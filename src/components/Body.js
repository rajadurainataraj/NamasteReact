import RestaurentList from "./RestaurentList"
import cardsObj from "../constant"
import { useState } from "react"

function filter(searchData, restaurants) {
    if (searchData === '') {
        return cardsObj
    } else {
        let filterData = restaurants.filter(item => {
            return item.data.name.toLowerCase().includes(searchData.toLowerCase())
        })
        return filterData
    }
}

export const Body = () => {
    const [restaurants, setRestaurants] = useState(cardsObj)
    const [searchData, setSearchData] = useState('')
  
    return (
        <>
            <div className="searchContainer">
                <input type='text' placeholder="search" value={searchData} onChange={
                    (e) => {
                        setSearchData(e.target.value)
                        if (searchData === '') {
                            setRestaurants(cardsObj) 
                        } else {
                            let data = filter(searchData, restaurants)
                            setRestaurants(data) 
                        }
                   
                    }
                } />
                <button onClick={() => {
                    let data = filter(searchData, restaurants)
                    setRestaurants(data)
            }}>Search</button>
            </div>
            <div className='restaurentContainer'>
                {
                    restaurants.map((restaurant) => {
                        return <RestaurentList key={restaurant.data.id} {...restaurant.data} />
                    })
                }
            </div>
        </>
    )
}