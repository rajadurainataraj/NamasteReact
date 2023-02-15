import React from 'react'
import ReactDOM from "react-dom/client"
import { Header } from './components/Header'
import { Body } from './components/Body'
import { Footer } from './components/Footer'

const Restaurent = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )
}

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(< Restaurent />)





