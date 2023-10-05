import { useState } from 'react';
import { NavLink } from "react-router-dom";
import SidebarItem from './SidebarItem';

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


const Sidebar = ({ sideBar }) => {
    return (
        <aside style={{ left: sideBar, cursor: 'pointer' }} id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#">
                        <i className="bi bi-house-door" />
                        <span>Trang chủ</span>
                    </a>
                </li>
                <li className="nav-item">
                    <SidebarItem link="./course" title="Bảng tin" icon="bi bi-grid"/>
                </li>
                <li className="nav-item">
                    <SidebarItem link="./course/member" title="Danh sách thành viên" icon="bi bi-person"/>
                </li>
                <li className="nav-item">
                    <SidebarItem link="./course/timeschedule" title="Thời khóa biểu" icon="bi bi-calendar"/>
                </li>
                <li className="nav-item">
                    <SidebarItem link="./course/exercise" title="Bài tập" icon="bi bi-book"/>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;