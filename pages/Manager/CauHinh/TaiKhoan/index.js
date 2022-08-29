import moment from "moment";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateTaiKhoan } from "../../../../redux/TaiKhoan/action";
import { ToastContainer } from 'react-toastify';
import { LOCALHOST_URL_API } from "../../../../ultis";
import axios from "axios"

const TaiKhoan = ({ dataTaiKhoan }) => {

    const [avatar, setAvatar] = useState()
    const [hoVaTen, setHoVaTen] = useState()
    const [ngaySinh, setNgaySinh] = useState()
    const [gioiTinh, setGioiTinh] = useState()
    const [diaChi, setDiaChi] = useState()
    const [soDienThoai, setSoDienThoai] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        if (dataTaiKhoan) {
            setHoVaTen(dataTaiKhoan?.hoVaTen)
            setAvatar(dataTaiKhoan?.avatar)
            setNgaySinh(dataTaiKhoan?.ngaySinh)
            setDiaChi(dataTaiKhoan?.diaChi)
            setSoDienThoai(dataTaiKhoan?.soDT)
            setGioiTinh(dataTaiKhoan?.gioiTinh)
        }
    }, [dataTaiKhoan])
    const onSubmitEditAvatar = async (e) => {

        let file = e
        const formData = new FormData()
        formData.append("images", file)
        formData.append("name", "huy")

        const res = await axios.post(`${LOCALHOST_URL_API}/upload`, formData)
        console.log("res", res);
        if (res) {
            setAvatar(res.data.name)
            const data = { avatar: res.data.name }
            axios.put(`${LOCALHOST_URL_API}/tai-khoan-avatar/${dataTaiKhoan?.Id}`, data)
        }

    }
    const onSubmitSave = async (id) => {

        const data = { hoVaTen, ngaySinh, gioiTinh, diaChi, soDT: soDienThoai }


        dispatch(updateTaiKhoan({

            data,
            id
        }))
    }

    const onSubmitCanle = () => {

        setHoVaTen(dataTaiKhoan?.hoVaTen)
        setAvatar(dataTaiKhoan?.avatar)
        setNgaySinh(dataTaiKhoan?.ngaySinh)
        setDiaChi(dataTaiKhoan?.diaChi)
        setSoDienThoai(dataTaiKhoan?.soDT)
        setGioiTinh(dataTaiKhoan?.gioiTinh)
    }

    return (
        <ContainerAccount>
            <ToastContainer />
            <ContainerAvatar>
                <Avatar>
                    <AvatarImage src={`${LOCALHOST_URL_API}/${avatar}`} />

                </Avatar>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <input id="files" accept="image/*" style={{ visibility: "hidden" }} type="file" onChange={(e) => onSubmitEditAvatar(e.target.files[0])} />
                    <label htmlFor="files" className="btn">Chỉnh sửa ảnh cá nhân</label>
                </div>
            </ContainerAvatar>
            <ContainerInfo>
                <ContentInput>
                    <Title>Loại tài khoản</Title>
                    <Input type="text" value={dataTaiKhoan?.roleUser} />
                </ContentInput>
                <ContentInput>
                    <Title>Email</Title>
                    <Input type="text" value={dataTaiKhoan?.taiKhoan} />
                </ContentInput>
                <ContentInput>
                    <Title>Họ và tên</Title>
                    <Input type="text" value={hoVaTen} onChange={(e) => setHoVaTen(e.target.value)} />
                </ContentInput>
                <ContentInput>
                    <Title>Ngày sinh</Title>
                    <Input type="date" value={moment(ngaySinh).format("YYYY-MM-DD")} onChange={(e) => setNgaySinh(e.target.value)} />
                </ContentInput>
                <ContentInput>
                    <Title>Giới tính</Title>
                    <Input value={gioiTinh === false ? "Nam" : "Nữ"} onChange={(e) => setGioiTinh(e.target.value)} />
                </ContentInput>
                <ContentInput>
                    <Title>Địa chỉ</Title>
                    <Input type="text" value={diaChi} onChange={(e) => setDiaChi(e.target.value)} />
                </ContentInput>
                <ContentInput>
                    <Title>Điện thoại</Title>
                    <Input type="number" value={soDienThoai} onChange={(e) => setSoDienThoai(e.target.value)} maxLength={5} />
                </ContentInput>
                <ContentInput className="update">
                    <Button variant="info" onClick={() => onSubmitSave(dataTaiKhoan?.Id)}>CẬP NHẬT</Button>
                    <Button variant="secondary" onClick={() => onSubmitCanle("")}>HỦY</Button>
                </ContentInput>

            </ContainerInfo>
        </ContainerAccount >
    )
}

export default TaiKhoan;

const ContainerAccount = styled.div`
    display: flex;
    gap: 20px;
    padding-left: 300px;
`
const Avatar = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #e2e2e2;
    overflow: hidden;
`
const ContainerAvatar = styled.div`
    width: 40%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
`
const ContainerInfo = styled.div`
    width: 60%;
    .update{
        border-bottom: none;
        display: flex;
        justify-content: center;
        gap: 30px;
    }
`

const ContentInput = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 215px 30px 50px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e2e2e2;
`
const Title = styled.div`
    font-weight: 500;
    color: #000000;
    font-size: 16px;
`
const Input = styled.input`
    border: none;
    width: 70%;
    text-align: right;
    outline: none;

    ::-webkit-outer-spin-button,
::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

    :active {
            border: none;
            outline: none;
    }
`

const AvatarImage = styled.img`

    width: 100%;
    height: 100%;
    object-fit: cover;
   
`




