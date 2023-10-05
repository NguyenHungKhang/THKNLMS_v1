import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import "../../assets/img/favicon-32x32.png"
import "../../assets/img/apple-touch-icon.png"


import "../../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../assets/vendor/boxicons/css/boxicons.min.css"
import "../../assets/vendor/quill/quill.snow.css"
import "../../assets/vendor/quill/quill.bubble.css"
import "../../assets/vendor/remixicon/remixicon.css"
import "../../assets/vendor/simple-datatables/style.css"
import "../../assets/css/style.css"
import "../../assets/quill/style.css"

const API_URL = process.env.REACT_APP_API_URL;
const CONFIG = {
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};

const MainLayout = ({ isLogin }) => {
    const [sideBar, setSideBar] = useState('0px')

    return (
        <>
            <Header isLogin={isLogin} sideBar={sideBar} setSideBar={setSideBar}/>
            <Sidebar sideBar={sideBar} />
            <Outlet context={sideBar}/>
        </>
    )
}

export default MainLayout;