import React from 'react'
// import { Routes, Route } from 'react-router'
import { HashRouter as Router, Route, Routes } from "react-router-dom";



import { AppHeader } from './cmps/app-header.jsx'
import { HomePage } from './pages/home-page.jsx';
import { AboutUs } from "./pages/about-us.jsx";
import { AppFooter } from './cmps/app-footer'
// import { UserDetails } from './pages/user-details'

export function RootCmp() {

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main className='app-main-container'>
                    <Routes>
                        <Route element={<HomePage />} path="/" />
                        <Route element={<AboutUs />} path="/about" />
                        {/* <Route element={<ContactUs />} path="/about" /> */}
                    </Routes>
                </main>
                <AppFooter />
            </div>
        </Router>
    )
}


