import { useState, useEffect } from 'react'
import { ApiUrl } from '../constant'


const useRestaurentList = (id) => {
    const [getMenu, setGetMenu] = useState({})
    const [menuItems, setMenuItems] = useState([])

    useEffect(() => {
        apiCall()
    }, [])
    async function apiCall() {
        const getData = await fetch(ApiUrl + id)
        const result = await getData.json()
        setGetMenu(result)
        setMenuItems(Object.values(result?.data?.menu?.items))
    }
    return {getMenu,menuItems}

}
export default useRestaurentList