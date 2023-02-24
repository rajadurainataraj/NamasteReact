import { useState, useEffect } from 'react'

const useUserOnline = () => {
    const [isOnline, setIsOnline] = useState(true)

    const isOnlineFunction = () => {
        const handleOffline = () => {
            setIsOnline(false)
        }
        const handleOnline = () => {
            setIsOnline(true)
        }
        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)
        
    }

    useEffect(() => {
        isOnlineFunction()
    }, [])

    return isOnline
}
export default useUserOnline