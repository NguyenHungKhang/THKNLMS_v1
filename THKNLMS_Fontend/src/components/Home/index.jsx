import { useNavigate, useOutletContext } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { getUserInfo } from '../../api/getUserInfo';
import { findById } from '../../api/courseAPI';
import { savePost, showPost } from '../../api/postAPI';
import { useMediaQuery } from 'react-responsive';
import ReactQuill from 'react-quill';
import axios from 'axios'
import Post from './Post';
import Deadline from './Deadline';
import Notification from './Notification';

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



const Home = ({ isLogin }) => {
    const navigate = useNavigate();
    const [info, setInfo] = useState({});
    const [course, setCourse] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const sideBar = useOutletContext()
    const mainResponsive = useMediaQuery({ query: '(min-width: 1199px)' })

    useEffect(() => {
        if (!isLogin) navigate('/');
        const initUserinfo = async () => {
            const newinfo = await getUserInfo();
            const newcourse = await findById();
            setInfo(newinfo);
            setCourse(newcourse);
        };
        initUserinfo();
    }, [isLogin]);


    return (
        <>
            <main id="main" className="main"
                style={{
                    marginLeft: mainResponsive ? (sideBar === "0px" ? "300px" : "150px") : "0px",
                    marginRight: mainResponsive ? (sideBar === "0px" ? "0px" : "150px") : "0px"
                }} >
                <div className="pagetitle">
                    <h1 > Bảng tin </h1> <nav>
                        <ol className="breadcrumb" >
                            <li className="breadcrumb-item" >
                                <a href="index.html" > Trang chủ </a>
                            </li>
                            <li className="breadcrumb-item active"> Bảng tin </li>
                        </ol>
                    </nav>
                </div>
                <section className="section dashboard" >
                    <div className="row" >
                        { /* <ObjectSlide /> */}
                    </div>
                    <div className="row" >
                        <div className="col-lg-3" >
                            <DeadlineTable />
                        </div>
                        <div className="col-lg-6" >
                            <PostEditor info={info} setOpenModal={setOpenModal} />
                            <ModalEditor open={openModal} setOpenModal={setOpenModal} onClose={() => setOpenModal(false)} info={info} course={course} />
                            <ShowPost course={course} info={info} setOpenModal={setOpenModal} />

                        </div>
                        <div className="col-lg-3" >
                            <Calendar />
                        </div>
                    </div >
                </section>
            </main >

            { /* <ModalEditorUpdate modalUpdatePost={modalUpdatePost} setModalUpdatePost={setModalUpdatePost}/> */}
        </>
    );
}

export default Home;

const DeadlineTable = ({ }) => {
    return (
        < Deadline />
    );
}

const ShowPost = ({ course, info, setOpenModal }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts([]);
        axios.get(`${API_URL}/post/course/1`, CONFIG)
            .then(value => {
                value.data.forEach(post => {
                    setPosts(posts => [post, ...posts]);
                });
            });
    }, []);

    return (
        <>
            {posts.map(post => {
                return (

                    <>
                        <div key={post.id} className="card post" >
                            <div className="d-flex justify-content-between px-4 pt-4" >
                                <div className="d-flex flex-row align-items-center" > <img src={post.owner.picture}
                                    style={
                                        { maxHeight: 40 }
                                    }
                                    className="rounded-circle" />
                                    <div className="d-flex flex-column ml-2" >
                                        <span className="font-weight-bold ps-3 post-user-name" > <strong> {post.owner.familyName + ' ' + post.owner.givenName} </strong></span >
                                        <small className="ps-3 post-time"> {post.createdTime} </small>
                                    </div>
                                </div>
                                <DropdownPost key={post.id} id={post.id}
                                    content={post.content}
                                    posts={posts}
                                    setPosts={setPosts}
                                    setOpenModal={setOpenModal} />
                            </div>
                            <div className="p-2">
                                <div className="text-justify ps-3"> <div className="ql-container post-content" dangerouslySetInnerHTML={{ __html: post.content }} /></div>

                                <div className="mb-3 mt-4 d-flex align-items-center" >
                                    <div className="d-flex me-2 flex-row icons d-flex align-items-center" > < i className="bi bi-chat ps-4" /> </div>
                                    <div className="d-flex flex-row muted-color" > <span> 0 bình luận </span> </div >
                                </div>

                                <div className="comment-input d-flex align-items-center ps-3" >
                                    <div className="pe-3" >
                                        <img src={info.picture} style={{ maxHeight: 40 }} className="rounded-circle" />
                                    </div> <input type="text"
                                        className="form-control"
                                        placeholder="Nhập bình luận" />
                                    <div className="fonts" > < i className="fa fa-camera" />
                                    </div>
                                </div >
                                <div className="comments pt-3" >
                                    {
                                        /* <div className="d-flex flex-row mb-2 ps-3"> <img src="https://i.imgur.com/9AZ2QX1.jpg" style={{ maxHeight: 40 }} className="rounded-circle" />
                                                            <div className="d-flex flex-column ml-2 ps-3"> <span className="name post-user-name">Học viên 1</span>
                                                              <small className="comment-text">Dạ em chào quản sinh</small>
                                                              <div className="d-flex flex-row align-items-center status"> <small className="text-primary">Trả
                                                                lời</small> <small className="text-success ps-2">18 phút</small>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="d-flex flex-row mb-2 ps-3"> <img src="https://i.imgur.com/1YrCKa1.jpg" style={{ maxHeight: 40 }} className="rounded-circle" />
                                                            <div className="d-flex flex-column ml-2 ps-3"> <span className="name post-user-name">Học viên 2</span>
                                                              <small className="comment-text">Hello anh chị và các bạn</small>
                                                              <div className="d-flex flex-row align-items-center status text-success">
                                                                <small className="text-primary">Trả lời</small> <small className="text-success ps-2">18 phút</small>
                                                              </div>
                                                            </div>
                                                          </div> */
                                    }
                                </div>
                            </div>
                        </div>
                        <Post content={post.content} />
                    </>
                );
            })}
        </>

    );
}

const DropdownPost = ({ id, content, posts, setPosts }) => {

    const [display, setDisplay] = useState('none');
    const [modalUpdatePost, setModalUpdatePost] = useState(false);
    const postMenu = useRef();
    const buttonMenu = useRef();

    const closeOpenPostMenu = (e) => {
        if (postMenu.current && !postMenu.current.contains(e.target)) {
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

    const deletePost = () => {
        axios.delete(`${API_URL}/post/delete/${id}`, CONFIG)
            .then(setPosts(posts.filter(post => post.id !== id)))
    }

    const updatePost = () => {
        setModalUpdatePost(true);
    }

    document.addEventListener("mousedown", closeOpenPostMenu);

    return (
        <>
            <div className="d-flex flex-row mt-1 ellipsis position-relative" >
                <i ref={buttonMenu} style={{ cursor: 'pointer' }} className="bi bi-three-dots-vertical" onClick={() => handleClick()} />
                <ul ref={postMenu} style={{ display: display }} className="dropdown-menu dropdown-menu-end post-dropdown-menu">
                    <li>
                        <a style={{ cursor: 'pointer' }} onClick={() => deletePost()} className="dropdown-item d-flex align-items-center" >
                            <i className="bi bi-trash3" />
                            <span> Xóa </span>
                        </a >
                    </li>
                    <li>
                        <a style={{ cursor: 'pointer' }} onClick={() => updatePost()} className="dropdown-item d-flex align-items-center" >
                            <i className="bi bi-pencil" />
                            <span > Chỉnh sửa </span>
                        </a>
                    </li>
                </ul>
            </div>
            <ModalEditorUpdate id={id}
                content={content}
                modalUpdatePost={modalUpdatePost}
                setModalUpdatePost={setModalUpdatePost} />
        </>
    );
}

const ModalEditor = ({ open, setOpenModal, onClose, info, course }) => {
    const [quill, setQuill] = useState('');

    const submitPost = () => {
        var data = {
            ownerId: info.id,
            courseId: course.id,
            content: quill,
        }
        axios.post(`${API_URL}/post/add`, JSON.stringify(data), CONFIG)
        setOpenModal(false);
    };


    if (!open) return null;

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike',], // toggled button
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { align: [] },
                { direction: 'rtl' },
            ],
            ['link', 'image', 'video'],
            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            ['clean'], // remove formatting button
        ],
    }

    const formats = [
        'italic', 'bold', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent', 'align', 'direction',
        'link', 'image', 'video',
        'color', 'background'
    ]


    return (
        <div className='fixed-top h-100 w-100'>
            <div className='h-100 d-flex justify-content-center align-items-center'>
                <div className="card" style={{ maxWidth: '700px', zIndex: '10000' }}>
                    <div className="card-body">
                        <h5 className="card-title"> THÔNG BÁO NỘI DUNG CHO LỚP HỌC </h5>
                        <ReactQuill theme="snow"
                            value={quill}
                            onChange={setQuill}
                            modules={modules}
                            formats={formats}
                            placeholder="Thông báo cho lớp học..." />
                        <div className="pt-3 d-flex d-flex justify-content-end">
                            <button style={{ width: '100px' }} onClick={() => setOpenModal(false)} className="me-1 btn btn-outline-dark"> Hủy </button>
                            {quill.trim() != '' && quill.trim() != '<p><br></p>'
                                ? <button style={{ width: '100px' }}
                                    onClick={() => submitPost()}
                                    className="btn btn-primary"> Đăng </button>
                                : <button style={{ width: '100px' }} className="btn btn-secondary" disabled > Đăng </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='position-absolute top-0 d-block w-100 h-100' style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }} onClick={() => setOpenModal(false)}></div>
        </div>
    );
}

const ModalEditorUpdate = ({ id, content, modalUpdatePost, setModalUpdatePost }) => {
    const [quill, setQuill] = useState('');
    useEffect(() => setQuill(content), [])

    const updatePost = () => {
        var data = {
            content: quill,
        }
        axios.put(`${API_URL}/post/update/${id}`, JSON.stringify(data), CONFIG)
        setModalUpdatePost(false);
    };

    if (!modalUpdatePost) return null;

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike',], // toggled button
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { align: [] },
                { direction: 'rtl' },
            ],
            ['link', 'image', 'video'],
            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            ['clean'], // remove formatting button
        ],
    }

    const formats = [
        'italic', 'bold', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent', 'align', 'direction',
        'link', 'image', 'video',
        'color', 'background'
    ]


    return (
        <div className='fixed-top h-100 w-100' >
            <div className='h-100 d-flex justify-content-center align-items-center' >
                <div className="card"
                    style={
                        { maxWidth: '700px', zIndex: '10000' }
                    } >
                    <div className="card-body" >
                        <h5 className="card-title"> CHỈNH SỬA THÔNG BÁO </h5>
                        <ReactQuill theme="snow"
                            value={quill}
                            onChange={setQuill}
                            modules={modules}
                            formats={formats}
                            placeholder="Thông báo cho lớp học..." />
                        <div className="pt-3 d-flex d-flex justify-content-end">
                            <button style={{ width: '100px' }} onClick={() => setModalUpdatePost(false)} className="me-1 btn btn-outline-dark" > Hủy </button>
                            {quill.trim() != '' && quill.trim() != '<p><br></p>'
                                ? <button style={{ width: '100px' }} onClick={() => updatePost()} className="btn btn-primary" > Lưu </button>
                                : <button style={{ width: '100px' }} className="btn btn-secondary" disabled > Đăng </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='position-absolute top-0 d-block w-100 h-100' style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }} onClick={() => setModalUpdatePost(false)}> </div>
        </div>
    );
}

const PostEditor = ({ info, setOpenModal }) => {
    return (
        <>
            <div className="card" >
                <div className="card-body pt-4" >
                    <div className="d-flex align-items-center ps-3" >
                        <div className="pe-3" >
                            <img src={info.picture} style={{ maxHeight: 40 }} className="rounded-circle" />
                        </div>
                        <a className="modal-open-editor pe-auto" src="#"
                            onClick={() => setOpenModal(true)}> Thông báo của bạn tới lớp học </a>
                    </div>
                </div>
            </div>
        </>
    )
}

const Calendar = ({ }) => {
    return (
        <Notification />

    );
}