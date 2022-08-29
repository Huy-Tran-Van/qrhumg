import axios from "axios";
import jwt from "jsonwebtoken";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { LOCALHOST_URL_API } from "../../ultis";

const DangNhap = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("Sai thông tin đăng nhập!")

    const onSubmitLogin = async () => {

        const data = {
            taiKhoan: email,
            matKhau: password
        }

        const res = await axios.post(`${LOCALHOST_URL_API}/dang-nhap`, data)

        if (res.data.data) {
            
            const token = res.data.data.token;
            localStorage.setItem("Token", token)

        }
    }

    return (
        <ContainerLogin>
            <div className="Auth-form-container">
                <div className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Đăng nhập</h3>
                        <div className="form-group mt-3">
                            <label>Tài Khoản</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Mật khẩu</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                onChange={(e) => setPassword(e.target.value)}

                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" onClick={() => onSubmitLogin()}>
                                Đăng Nhập
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </div>
            </div>
        </ContainerLogin>
    )
}

export default DangNhap;

const ContainerLogin = styled.div`
    .Auth-form-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }
  
    .Auth-form {
        width: 420px;
        box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
        padding-top: 30px;
        padding-bottom: 20px;
        border-radius: 8px;
        background-color: white;
    }
  
    .Auth-form-content {
        padding-left: 12%;
        padding-right: 12%;
    }
  
    .Auth-form-title {
        text-align: center;
        margin-bottom: 1em;
        font-size: 24px;
        color: rgb(34, 34, 34);
        font-weight: 800;
    }
  
    label {
        font-size: 14px;
        font-weight: 600;
        color: rgb(34, 34, 34);
    }
`