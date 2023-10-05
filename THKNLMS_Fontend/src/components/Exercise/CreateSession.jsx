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



const CreateSession = ({ }) => {
    
    const [display, setDisplay] = useState('none');

    const createSessionMenu = useRef();
    const buttonMenu = useRef();

    const closeOpenCreateSessionMenu = (e) => {
        if (createSessionMenu.current && !createSessionMenu.current.contains(e.target)) {
            if (buttonMenu.current && !buttonMenu.current.contains(e.target))
                setDisplay('none')
        }
    }

    function handleClick() {
        if (display === 'none') {
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }

    document.addEventListener("mousedown", closeOpenCreateSessionMenu);

    return (
        <div className="d-flex mb-3 custom-crud-member-bar">
            <a ref={buttonMenu} onClick={() => handleClick()} className="btn btn-primary me-2 w-auto text-nowrap"><i className="bi bi-plus-lg" /> Thêm </a>
            <ul ref={createSessionMenu} style={{ display: display }} className="dropdown-menu dropdown-menu-end create-session-dropdown-menu">
                    <li>
                        <a style={{ cursor: 'pointer' }}  className="dropdown-item d-flex align-items-center" >
                            <i className="bi bi-trash3" />
                            <span> Xóa </span>
                        </a >
                    </li>
                    <li>
                        <a style={{ cursor: 'pointer' }} className="dropdown-item d-flex align-items-center" >
                            <i className="bi bi-pencil" />
                            <span > Chỉnh sửa </span>
                        </a>
                    </li>
                </ul>

            <form className="search-form d-flex align-items-center" method="POST" action="#">
                <input type="text" name="query" placeholder="Tìm kiếm giảng viên" title="Tìm kiếm giảng viên" />
                <button type="submit" title="Tìm kiếm bài tập"><i className="bi bi-search" /></button>
            </form>

        </div>
    );
}

export default CreateSession;