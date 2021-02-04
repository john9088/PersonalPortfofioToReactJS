import React from 'react'
import NavBar from './NavBar.js'
import Headder from './Header.js'
import Portfolio from './Portfolio.js'
import About from './About.js'
import Contact from './Contact'
import Footer from './Footer.js'
import CopyrightFooter from './Copyright_Scroll'

const App = () =>{
    return(
        <div>
            <NavBar/>
            <Headder/>
            <Portfolio/>
            <About/>
            <Contact/>
            <Footer/>
            <CopyrightFooter/>
        </div>
        
    )
}


export default App
