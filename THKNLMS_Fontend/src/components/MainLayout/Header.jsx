import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive'
import { getUserInfo } from '../../api/getUserInfo';
import Sidebar from './Sidebar.jsx';

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


const Header = ({ isLogin, sideBar, setSideBar }) => {

    const navigate = useNavigate();
    const [info, setInfo] = useState({
        email: '',
        familyName: '',
        givenName: '',
        picture: '',
    });

    useEffect(() => {
        if (!isLogin) navigate('/');
        const initUserinfo = async () => {
            const newinfo = await getUserInfo();
            setInfo(newinfo);
        };
        initUserinfo();
    }, [isLogin]);

    const toggleSideBar = () => {
        if(sideBar == "0px")
            setSideBar("-300px");
        else
            setSideBar("0px");
    }

    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <a href="index.html" className="logo d-flex align-items-center">
                    <img src={require("../../assets/img/logo-hsv.png")} alt="Logo Hội Sinh Viên" />
                    <img src={require("../../assets/img/logo-clb.png")} alt="Logo Câu lạc bộ Kỹ Năng" />
                    <img src={require("../../assets/img/logo-thkn.png")} alt="Logo Tập Huấn Kỹ Năng" />
                    <span className="d-none d-lg-block">THKNLMS</span>
                </a>
                <i onClick={() => toggleSideBar()} className="bi bi-list toggle-sidebar-btn" />
            </div>
            {/* End Logo */}
            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <li className="nav-item dropdown">
                        <HeaderNoti />
                    </li>

                    <li className="nav-item dropdown pe-3">
                        <HeaderProfile info={info} />
                    </li>
                </ul>
            </nav>
        </header>


    );
}

export default Header;

const HeaderNoti = () => {
    const [display, setDisplay] = useState('none')
    const notiMenu = useRef();
    const buttonMenu = useRef();

    const closeOpenNoti = (e) => {
        if (notiMenu.current && !notiMenu.current.contains(e.target)) {
            if (buttonMenu.current && !buttonMenu.current.contains(e.target))
                setDisplay('none')
        }
    }


    function handleClick() {
        if (display == 'none') {
            setDisplay('block')
        } else {
            setDisplay('none')
        }

    }

    document.addEventListener("mousedown", closeOpenNoti);

    return (
        <>
            <a ref={buttonMenu} style={{ cursor: 'pointer' }} className="nav-link nav-icon" onClick={() => handleClick()}>
                <i className="bi bi-bell" />
                <span className="badge bg-danger badge-number">4</span>
            </a>
            {/* End Notification Icon */}
            <ul ref={notiMenu} style={{ display: display, position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate(-25px, 35px)' }} className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                    Bạn có 4 thông báo mới
                    <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">Xem tất cả</span></a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning" />
                    <div>
                        <h4>Nộp bài</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>30 phút trước</p>
                    </div>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                    <i className="bi bi-x-circle text-danger" />
                    <div>
                        <h4>Không hoàn thành</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>1 giờ trước</p>
                    </div>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                    <i className="bi bi-check-circle text-success" />
                    <div>
                        <h4>Hoàn thành</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>2 giờ trước</p>
                    </div>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                    <i className="bi bi-info-circle text-primary" />
                    <div>
                        <h4>Thông báo</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>4 giờ trước</p>
                    </div>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                    <a href="#">Xem tất cả thông báo</a>
                </li>
            </ul>
        </>

    );
}

const HeaderProfile = ({ info }) => {
    const [display, setDisplay] = useState('none')
    const profileMenu = useRef();
    const buttonMenu = useRef();

    const closeOpenProfile = (e) => {
        if (profileMenu.current && !profileMenu.current.contains(e.target)) {
            if (buttonMenu.current && !buttonMenu.current.contains(e.target))
                setDisplay('none')
        }
    }

    function handleClick() {
        if (display == 'none') {
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }

    document.addEventListener("mousedown", closeOpenProfile);

    return (
        <>
            <a ref={buttonMenu} style={{ cursor: 'pointer' }} className="pe-auto nav-link nav-profile d-flex align-items-center pe-0" onClick={() => handleClick()}>
                <img src={info.picture} alt={info.familyName + " " + info.givenName} className="rounded-circle" />
                <span className="d-none d-md-block dropdown-toggle ps-2">{info.familyName + " " + info.givenName}</span>
            </a>
            {/* End Profile Iamge Icon */}
            <ul ref={profileMenu} style={{ display: display, position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate(-25px, 35px)' }} className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                    <h6>{info.familyName + " " + info.givenName}</h6>
                    <span>Học viên</span>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i className="bi bi-person" />
                        <span>Thông tin cá nhân</span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i className="bi bi-gear" />
                        <span>Cài đặt tài khoản</span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                        <i className="bi bi-question-circle" />
                        <span>Hỗ trợ</span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <i className="bi bi-box-arrow-right" />
                        <span>Đăng xuất</span>
                    </a>
                </li>
            </ul>
            {/* End Profile Dropdown Items */}
        </>

    );
}