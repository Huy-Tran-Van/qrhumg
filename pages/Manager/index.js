import MenuLeftManager from "./MenuLeft";
import { useRouter } from 'next/router'
import ChiTietUngTuyen from "./UngTuyen/ChiTietUngTuyen";
import CamKetHocTap from "./UngTuyen/CamKetHocTap";
import PhucLoi from "./UngTuyen/PhucLoi";
import SinhVienThucHien from "./UngTuyen/SinhVienThucHien";
import UngTuyenNgay from "./UngTuyen/UngTuyenNgay";
import Khoa from "./UngTuyen/Khoa";
import ThemBaiViet from "./CoSoVatChat/ThemBaiViet";
import ViTriUngTuyen from "./UngTuyen/ViTriUngTuyen";
import HinhThucUngTuyen from "./UngTuyen/HinhThucUngTuyen";
import HeaderManager from "./Header";
import TaiKhoan from "./CauHinh/TaiKhoan";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTaiKhoan, getTaiKhoanSuccess } from "../../redux/TaiKhoan/action";
import jwt from "jsonwebtoken";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import DangNhap from "../dang-nhap";
import FilterKhoa from "./TrangChu/FilterKhoa";
import Video from "./TrangChu/Video";
import { Banner } from "./CauHinh/Banner";


const Query = ({ dataTaiKhoan }) => {

    const { query } = useRouter()

    switch (query.type) {

        case "chi-tiet-ung-tuyen":
            return <ChiTietUngTuyen />

        case "cam-ket-hoc-tap":
            return <CamKetHocTap />

        case "phuc-loi":
            return <PhucLoi />

        case "sinh-vien-thuc-hien":
            return <SinhVienThucHien />

        case "ung-tuyen-ngay":
            return <UngTuyenNgay />

        case "khoa":
            return <Khoa />

        case "vi-tri-ung-tuyen":
            return <ViTriUngTuyen />

        case "them-bai-viet":
            return <ThemBaiViet />

        case "hinh-thuc-ung-tuyen":
            return <HinhThucUngTuyen />

        case "tai-khoan":
            return <TaiKhoan dataTaiKhoan={dataTaiKhoan} />

        case "filter-khoa":
            return <FilterKhoa />

        case "video-gioi-thieu":
            return <Video />

        case "banner":
            return <Banner />

        default:
            return <div>Chưa tạo</div>
    }
}
const Manager = () => {

    const [token, setToken] = useState()
    const { dataTaiKhoan } = useSelector(state => state.taiKhoanReducer)


    const dispatch = useDispatch()

    useEffect(() => {

        const Token = localStorage.getItem("Token");

        if (Token) {

            const decodeToken = jwt.decode(Token)
            setToken(Token)
            dispatch(getTaiKhoan(decodeToken.Id))
        } else {
            setToken("")
        }

    }, [dispatch])

    return (
        <div style={{ display: "flex" }}>
            <MenuLeftManager />
            <div style={{ width: "100%" }}>
                <HeaderManager dataTaiKhoan={dataTaiKhoan} />
                <Query dataTaiKhoan={dataTaiKhoan} />
            </div>

        </div>

    )
}

export default Manager;