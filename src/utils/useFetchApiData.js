import { useState, useEffect }from 'react'
const useFetchApiData = () => {
    const [searchData, setSearchData] = useState('')
    const [restaurants, setRestaurants] = useState([])
    const [apiData, setApiData] = useState([])
    const [delayState, setDelayState] = useState(true)
    const [carosal,setCarosal] = useState([])

    const URL_API = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.009496&lng=76.945033&page_type=DESKTOP_WEB_LISTING'

    useEffect(() => {
        setTimeout(() => {
            setDelayState(false)
        }, 2000)
        apiCall()
    }, [])
    

    async function apiCall() {
        const fetchData = await fetch(URL_API)
        const result = await fetchData.json()
        console.log(result)
        setApiData(result?.data?.cards[2]?.data?.data?.cards)
        setRestaurants(result?.data?.cards[2]?.data?.data?.cards)
        setCarosal(result?.data?.cards[0]?.data?.data?.cards)
    } 
    return {delayState,apiData,restaurants,searchData, setSearchData,setRestaurants,carosal}
}

export default useFetchApiData