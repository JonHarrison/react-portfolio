import React from "react";
import { Outlet } from 'react-router-dom'

import "./style.css";

// provides a wrapper around the main page content, css provides padding to ensure the header and footer doesn't overlay this element
const Main = (props) => {
    return (
        // <Outlet>
            <main className="main flexbox-item fill-area content flexbox-item-grow">{props.children}</main>
        // </Outlet>
    );
}

export default Main;
