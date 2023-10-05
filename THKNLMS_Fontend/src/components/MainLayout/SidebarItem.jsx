import { useState } from 'react';
import { NavLink } from "react-router-dom";

import "../../assets/img/favicon-32x32.png"
import "../../assets/img/apple-touch-icon.png"

import "../../assets/css/style.css"
import "../../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../assets/vendor/boxicons/css/boxicons.min.css"
import "../../assets/vendor/quill/quill.snow.css"
import "../../assets/vendor/quill/quill.bubble.css"
import "../../assets/vendor/remixicon/remixicon.css"
import "../../assets/vendor/simple-datatables/style.css"


const SidebarItem = ({ link, title, icon }) => {
    return (
        <NavLink className={"." + window.location.pathname === link ? "nav-link" : "nav-link active"} to={link}>
            <i className={icon} />
            <span>{title}</span>
        </NavLink>
    );
}

export default SidebarItem;