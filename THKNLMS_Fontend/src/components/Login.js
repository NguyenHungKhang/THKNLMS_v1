import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from '../components/GoogleLogin';
import { postLoginToken } from '../api/postLoginToken';

import "../assets/img/favicon-32x32.png"
import "../assets/img/apple-touch-icon.png"


import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assets/vendor/boxicons/css/boxicons.min.css"
import "../assets/vendor/quill/quill.snow.css"
import "../assets/vendor/quill/quill.bubble.css"
import "../assets/vendor/remixicon/remixicon.css"
import "../assets/vendor/simple-datatables/style.css"
import "../assets/css/style.css"


const Login = ({isLogin, setIsLogin}) => {
    const navigate = useNavigate();

    // https://stackoverflow.com/questions/49819183/react-what-is-the-best-way-to-handle-login-and-authentication
    const onGoogleSignIn = async res => {
        console.log("132");
        const { credential } = res;
        const result = await postLoginToken(credential, setIsLogin);
        setIsLogin(result);
    };

    useEffect(() => {
        if (!isLogin) return;
        navigate('/course');
    }, [isLogin]);

    console.log("123");

    return (
        <main>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                {/* End Logo */}
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">ĐĂNG NHẬP THKNLMS</h5>
                                            <p className="text-center small">Đăng nhập bằng tài khoản google được cho phép</p>
                                        </div>
                                        <div className="pt-4 pb-2 d-flex mb-4">
                                            <img src={require("../assets/img/logo-hsv.png")} className="mx-2" style={{ maxHeight: 100 }} alt="Hội Sinh vien Việt Nam" />
                                            <img src={require("../assets/img/logo-clb.png")} className="mx-2" style={{ maxHeight: 100 }} alt="Câu lạc bộ Kỹ Năng" />
                                            <img src={require("../assets/img/logo-thkn.png")} className="mx-2" style={{ maxHeight: 100 }} alt="Tập huẫn Kỹ Năng" />
                                        </div>
                                        <form className="row g-3 needs-validation" noValidate>
                                            <div className="col-12 d-flex justify-content-center">
                                                <GoogleLogin onGoogleSignIn={onGoogleSignIn} text="THKNLMS" />
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">Bạn gặp vấn đề về đăng nhập? <a href="pages-register.html">Liên hệ hỗ trợ</a></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="credits">
                                    {/* All the links in the footer should remain intact. */}
                                    {/* You can delete the links only if you purchased the pro version. */}
                                    {/* Licensing information: https://bootstrapmade.com/license/ */}
                                    {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
                                    <div className="text-center">Được thiết kế bởi </div>
                                    <a className="text-center" href="https://www.facebook.com/kynangspk">CLB Kỹ Năng - ĐH Sư Phạm Kỹ Thuật TP.HCM</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Login;