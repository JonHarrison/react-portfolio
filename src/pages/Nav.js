import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/nothing-here">Nothing Here</Link>
                </li>
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}

export default Nav