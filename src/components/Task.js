import { useEffect, useState } from "react";
const url = 'https://jsonplaceholder.typicode.com/posts'
const Task = () => {
    const [getData, setGetData] = useState([])
    useEffect(() => {
        user()
    }, [])
    const user = async () => {
        const users = await fetch(url)
        const result = await users.json()
        // console.log(result)
        setGetData(result)
    }
    const filterFun = (id) => {
        console.log(id)
        return getData.filter(item => item.id !== id)
    }
    return (
        <>
            {getData.map(user => {
                return (
                    <div >
                        <h1>{user.title}</h1> <button onClick={() => {
                            const data =
                                filterFun(user.id)
                                setGetData(data)
                        }}>remove me</button>
                    </div>
                )


            })}

        </>

    )
}
export default Task;