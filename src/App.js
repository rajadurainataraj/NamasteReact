import React, { useState } from 'react'
import ReactDOM from "react-dom/client"
import { Header } from './components/Header'
import { Body } from './components/Body'
import { Footer } from './components/Footer'
import Authentication from './components/Authentication'


const Restaurent = () => {
    const [isLogin, setIsLogin] = useState(true)

    function loggedIn(message) {
        setIsLogin(message)
    }
    return (
        <React.Fragment>
            {isLogin ?
                <>
                    <Header loggedIn={loggedIn} />
                    <Body />
                    <Footer />
                </>
                :
                <Authentication loggedIn={loggedIn} />

            }
        </React.Fragment>
    )
}

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(< Restaurent />)





