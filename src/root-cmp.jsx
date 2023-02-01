import React from 'react'
import { Routes, Route } from 'react-router'


// import { AppHeader } from './cmps/app-header'
// import { AppFooter } from './cmps/app-footer'
// import { UserDetails } from './pages/user-details'

export function RootCmp() {

    return (
        <div className="app">
            {/* <AppHeader/> */}
            <main className='app-main-container'>
                <Routes>
                </Routes>
            </main>
            {/* <AppFooter /> */}
        </div>
    )
}


