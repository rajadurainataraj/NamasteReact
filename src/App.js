import React, { Children, lazy,useState, Suspense} from 'react'
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


const Instamart = lazy(() =>import('./components/Instamart'))

const App = () => {
    const [isLogin, setIsLogin] = useState(true)

    function loggedIn(message) {
        setIsLogin(message)
    }

    return (
        <React.Fragment>
     
            {isLogin ?
                <>
                    {/* <ColorChangeTask/> */}
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
                element:<RestaurentMenu/>
            },    
            {
                path: '/Instamart',
                element: <Suspense><Instamart/></Suspense>
            }
        ],
       
    },  

  

])

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(< RouterProvider router={appRouter} />)





