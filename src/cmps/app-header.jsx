

import { NavLink, Link } from 'react-router-dom'
import { useState } from "react"
import logo from '../assets/img/logo.svg'



export function AppHeader() {

    const [isClicked, setIsClicked] = useState(false)



    return (
        <header className="app-header">
            <nav>
                <NavLink to="/"><img src={logo} alt="" /></NavLink>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
                <NavLink to="/contact"><button className='primary'>contact us</button></NavLink>

            {/* <span onClick={() => setIsClicked(!isClicked)} className="material-symbols-outlined menu-btn">menu</span>
            {isClicked && <div className="header-modal animate__animated animate__fadeInDown">
                <NavLink onClick={() => setIsClicked(!isClicked)} to="/toy"><img src={toyImg} /></NavLink>
                <NavLink onClick={() => setIsClicked(!isClicked)} to="/"><img src={homeImg} /></NavLink>
                <NavLink onClick={() => setIsClicked(!isClicked)} to="/dashboard"><img src={chartImg} /></NavLink>
                <NavLink onClick={() => setIsClicked(!isClicked)} to="/about"><img src={mapImg} /></NavLink>

            </div>} */}

        </header>
    )
}
