import React from "react";
import { Outlet } from 'react-router-dom'

import "./style.css";

// provides a wrapper around the main page content, css provides padding to ensure the header and footer doesn't overlay this element
function Main(props) {
    return (
        // <Outlet>
            <main className="main">{props.children}</main>
        // </Outlet>
    );
}

export default Main;
