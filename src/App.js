import React, { Children, useState } from 'react'
import ReactDOM from "react-dom/client"
import { Header } from './components/Header'
import { Body } from './components/Body'
import { Footer } from './components/Footer'
import Authentication from './components/Authentication'
import AboutUs from './components/About'
import { createBrowserRouter, RouterProvider,Link,Outlet } from 'react-router-dom'
import Error from './components/Error'
import RestaurentMenu from './components/RestaturentMenu'


const App = () => {
    const [isLogin, setIsLogin] = useState(true)

    function loggedIn(message) {
        setIsLogin(message)
    }

    return (
        <React.Fragment>
     
            {isLogin ?
                <>
                    <Header loggedIn={loggedIn} />
                    <Outlet/>
                    <Footer />
                </>
                :
                <Authentication loggedIn={loggedIn} />
            }
        </React.Fragment>
    )
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,

        children: [
            {
                path: '/',
                element:<Body/>
            },
            {
                path: '/aboutus',
                element:<AboutUs/>
            },
            {
                path: '/restaurentmenu/:id',
                element:<RestaurentMenu/>
            }    
        ],
       
    },  

  

])

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(< RouterProvider router={appRouter} />)





