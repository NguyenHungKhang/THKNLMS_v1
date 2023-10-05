import { useOutletContext, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState, useRef, useEffect } from 'react';
import { getUserInfo } from '../../api/getUserInfo';
import DropdownMember from './DropdownMember';

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



const Member = ({ isLogin }) => {
    const navigate = useNavigate();
    const [info, setInfo] = useState({});
    const sideBar = useOutletContext();
    const mainResponsive = useMediaQuery({ query: '(min-width: 1199px)' })
    const listControlResponsive = useMediaQuery({ query: '(min-width: 1499px)' })

    useEffect(() => {
        if (!isLogin) navigate('/');
        const initUserinfo = async () => {
            const newinfo = await getUserInfo();
            setInfo(newinfo);
        };
        initUserinfo();
    }, [isLogin]);


    return (
        <main id="main" className="main"
            style={{
                marginLeft: mainResponsive ? (sideBar == "0px" ? "300px" : "150px") : "0px",
                marginRight: mainResponsive ? (sideBar == "0px" ? "0px" : "150px") : "0px"
            }} >
            <div className="pagetitle">
                <h1>Thành viên khóa học</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Trang chủ</a></li>
                        <li className="breadcrumb-item active">Thành viên khóa học</li>
                    </ol>
                </nav>
            </div>
            {/* End Page Title */}
            <section className="section dashboard">
                <hr />
                <div className="row justify-content-center">
                    <div className="col-sm-9">
                        <div className="card">

                            <div className="card-body">

                                <h5 className="card-title mb-0" > <strong> Danh sách giảng viên </strong></h5>
                                <div className="d-flex mb-3 custom-crud-member-bar">
                                    <a className="btn btn-primary me-2 w-auto text-nowrap"> <i className="bi bi-plus-lg" /> Thêm giảng viên </a>
                                    <a className="btn btn-success me-2 w-auto text-nowrap"> <i className="bi bi-file-earmark-excel" /> Nhập bằng file Excel </a>
                                    <a className="btn btn-outline-dark me-2 w-auto text-nowrap"> <i className="bi bi-printer" /> </a>

                                    <form className="search-form d-flex align-items-center" method="POST" action="#">
                                        <input type="text" name="query" placeholder="Tìm kiếm giảng viên" title="Tìm kiếm giảng viên" />
                                        <button type="submit" title="Tìm kiếm giảng viên"><i className="bi bi-search" /></button>
                                    </form>

                                </div>

                                <div className="custom-teacher-list" >
                                    <div className="custom-teacher-list-item d-flex post-item position-relative justify-content-between align-items-center" >
                                        <div className="d-flex me-3">
                                            <img src={info.picture} alt="Profile" className="rounded-circle me-3" />
                                            <div>
                                                <h4>{info.familyName + " " + info.givenName} (Bạn) <span className="badge bg-success"><p className='text-white'>Sở hữu lớp học</p></span></h4>
                                                <p>{info.email}</p>
                                            </div>
                                        </div>

                                        <div>
                                            {listControlResponsive
                                                ?
                                                <>
                                                    <div className="btn btn-success me-3"><i className="bi bi-trash" /> Mời quản trị</div>
                                                    <div className="btn btn-primary me-3"><i className="bi bi-envelope" /> Gửi mail</div>
                                                    <div className="btn btn-outline-danger"><i className="bi bi-trash" /> Xóa</div>
                                                </>

                                                : <DropdownMember />
                                            }
                                        </div>


                                    </div>
                                    <div className="custom-teacher-list-item d-flex post-item position-relative justify-content-between align-items-center mt-3" >
                                        <div className="d-flex me-3">
                                            <img src={info.picture} alt="Profile" className="rounded-circle me-3" />
                                            <div>
                                                <h4>{info.familyName + " " + info.givenName} (Bạn) <span className="badge bg-success"><p className='text-white'>Sở hữu lớp học</p></span></h4>
                                                <p>{info.email}</p>
                                            </div>
                                        </div>
                                        <div>
                                            {listControlResponsive
                                                ?
                                                <>
                                                    <div className="btn btn-success me-3"><i className="bi bi-trash" /> Mời quản trị</div>
                                                    <div className="btn btn-primary me-3"><i className="bi bi-envelope" /> Gửi mail</div>
                                                    <div className="btn btn-outline-danger"><i className="bi bi-trash" /> Xóa</div>
                                                </>

                                                : <DropdownMember />
                                            }
                                        </div>
                                    </div>
                                    <div className="custom-teacher-list-item d-flex post-item position-relative justify-content-between align-items-center mt-3" >
                                        <div className="d-flex me-3">
                                            <img src={info.picture} alt="Profile" className="rounded-circle me-3" />
                                            <div>
                                                <h4>{info.familyName + " " + info.givenName} (Bạn) <span className="badge bg-success"><p className='text-white'>Sở hữu lớp học</p></span></h4>
                                                <p>{info.email}</p>
                                            </div>
                                        </div>
                                        <div>
                                            {listControlResponsive
                                                ?
                                                <>
                                                    <div className="btn btn-success me-3"><i className="bi bi-trash" /> Mời quản trị</div>
                                                    <div className="btn btn-primary me-3"><i className="bi bi-envelope" /> Gửi mail</div>
                                                    <div className="btn btn-outline-danger"><i className="bi bi-trash" /> Xóa</div>
                                                </>

                                                : <DropdownMember />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">

                            <div className="card-body">

                                <h5 className="card-title mb-0" > <strong> Danh sách học viên </strong></h5>
                                <div className="d-flex mb-3 custom-crud-member-bar">
                                    <a className="btn btn-primary me-2 w-auto text-nowrap"> <i className="bi bi-plus-lg" /> Thêm học viên  </a>
                                    <a className="btn btn-success me-2 w-auto text-nowrap"> <i className="bi bi-file-earmark-excel" /> Nhập bằng file Excel </a>
                                    <a className="btn btn-outline-dark me-2 w-auto text-nowrap"> <i className="bi bi-printer" /> </a>

                                    <form className="search-form d-flex align-items-center" method="POST" action="#">
                                        <input type="text" name="query" placeholder="Tìm kiếm học viên" title="Tìm kiếm giảng viên" />
                                        <button type="submit" title="Tìm kiếm giảng viên"><i className="bi bi-search" /></button>
                                    </form>

                                </div>

                                <div className="custom-teacher-list" >
                                    <div className="custom-teacher-list-item d-flex post-item position-relative justify-content-between align-items-center" >
                                        <div className="d-flex me-3">
                                            <img src={info.picture} alt="Profile" className="rounded-circle me-3" />
                                            <div>
                                                <h4>{info.familyName + " " + info.givenName} (Bạn) <span className="badge bg-success"><p className='text-white'>Sở hữu lớp học</p></span></h4>
                                                <p>{info.email}</p>
                                            </div>
                                        </div>
                                        <div>
                                            {listControlResponsive
                                                ?
                                                <>
                                                    <div className="btn btn-success me-3"><i className="bi bi-trash" />Mời quản trị</div>
                                                    <div className="btn btn-primary me-3"><i className="bi bi-envelope" />Gửi mail</div>
                                                    <div className="btn btn-outline-danger"><i className="bi bi-trash" />Xóa</div>
                                                </>

                                                : <DropdownMember />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>

    );
}

export default Member;