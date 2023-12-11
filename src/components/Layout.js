import React from 'react'

import Sidebar from './sidebar/SideBar'

const Layout = ({ children }) => {

    
    return (
        <>
            <div className='flex bg-gray-900'>
                <Sidebar />
                <div className="flex-1 ">{children}</div>
            </div>
        </>
    )
}

export default Layout
