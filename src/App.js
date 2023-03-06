import React, { Children, lazy, useState, Suspense } from 'react'
import ReactDOM from "react-dom/client"
import { Header } from './components/Header'
import { Body } from './components/Body'
import { Footer } from './components/Footer'
import Authentication from './components/Authentication'
import AboutUs from './components/About'

import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom'
import ContactUs from './components/ContactUs'
import Error from './components/Error'
import RestaurentMenu from './components/RestaturentMenu'
import ColorChangeTask from './components/ColorChangeTask'
import UserContext from './utils/UserContext'
import store from './utils/store'
import { Provider } from 'react-redux'
import Cart from './components/Cart'
import Favourites from './components/Favourites'

const Instamart = lazy(() => import('./components/Instamart'))

const App = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [user, setUser] = useState({
        userName: "chandrasekaran",
        password: "chandru@gmail.com"
    })
    function loggedIn(message) {
        setIsLogin(message)
    }

    return (
            <Provider store={store}>
            <UserContext.Provider value={{user:user,setUser:setUser}}>
                {isLogin ?
                    <>
                        {/* <ColorChangeTask/> */}
                        <Header loggedIn={loggedIn} />
                        <Outlet />
                        <Footer />
                    </>
                    :
                    <Authentication loggedIn={loggedIn} />
                }
                </UserContext.Provider>
                </Provider>
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
                element: <Body />
            },
            {
                path: '/aboutus',
                element: <AboutUs />,
                children: [
                    {
                        path: 'contactus',
                        element: <ContactUs />
                    }
                ]
            },
            {
                path: '/restaurentmenu/:id',
                element: <RestaurentMenu />
            },
            {
                path: '/Instamart',
                element: <Suspense><Instamart /></Suspense>
            },
            {
                path: '/Cart',
                element:<Cart/>
            },
            {
                path: '/Favourites',
                element:<Favourites/>
            }
        ],

    },



])

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(< RouterProvider router={appRouter} />)





