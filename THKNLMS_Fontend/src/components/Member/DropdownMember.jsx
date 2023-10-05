import { useOutletContext, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState, useRef, useEffect } from 'react';
import { getUserInfo } from '../../api/getUserInfo';

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

const DropdownMember = ({ }) => {
    const memberMenu = useRef();
    const buttonMenu = useRef();
    const [display, setDisplay] = useState('none');

    const closeOpenMemberMenu = (e) => {
        if (memberMenu.current && !memberMenu.current.contains(e.target)) {
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

    document.addEventListener("mousedown", closeOpenMemberMenu);

    return (
        <div className="me-2">
            <i ref={buttonMenu} style={{ cursor: 'pointer' }} className="bi bi-three-dots" onClick={() => handleClick()} />
            <ul ref={memberMenu} style={{ display: display }} className="dropdown-menu dropdown-menu-end member-dropdown-menu">
                <li>
                    <a style={{ cursor: 'pointer' }} className="dropdown-item d-flex align-items-center" >
                        <div className="btn btn-success me-3"><i className="bi bi-trash" />Mời quản trị</div>
                    </a >
                </li>
                <li>
                    <a style={{ cursor: 'pointer' }} className="dropdown-item d-flex align-items-center" >
                        <div className="btn btn-primary me-3"><i className="bi bi-envelope" />Gửi mail</div>
                    </a>
                </li>
                <li>
                    <a style={{ cursor: 'pointer' }} className="dropdown-item d-flex align-items-center" >
                        <div className="btn btn-outline-danger"><i className="bi bi-trash" />Xóa</div>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default DropdownMember