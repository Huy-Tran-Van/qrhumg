import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Form, FormControl, InputGroup, Table } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import ButtonAdd from "../../../../components/ButtonAdd";
import ButtonEdit from "../../../../components/ButtonEdit";
import { ContainerManager } from "../../../../components/Styled/style";
import { deleteUngTuyenNgay, getAllUngTuyenNgay, searchUngTuyenNgay } from "../../../../redux/UngTuyenNgay/action";
import { LOCALHOST_URL_API } from "../../../../ultis";

const UngTuyenNgay = () => {

    const typingTimeoutRef = useRef()
    const [contentUngTuyenNgay, setContentUngTuyenNgay] = useState("");
    const [status, setStatus] = useState("ADD")
    const [idSinhVien, setIdSinhVien] = useState();
    const [hoVaTen, setHoVaTen] = useState("")
    const [emaiHoacSDT, setEmailHoacSDT] = useState("")
    const [viTriUngTuyen, setViTriUngTuyen] = useState("")
    const [khoa, setKhoa] = useState("")
    const [hinhThuc, setHinhThuc] = useState("")
    const [khoaAPI, setKhoaAPI] = useState([]);
    const [viTriUngTuyenAPI, setViTriUngTuyenAPI] = useState([]);
    const [hinhThucTuyenSinh, setHinhThucTuyenSinh] = useState([]);




    const { dataUngTuyenNgay } = useSelector(state => state.ungTuyenNgayReducer)

    const dataKhoa = khoaAPI?.map((item, index) => <option key={index} value={item.Id}>{item.tenKhoa}</option>)
    const dataViTriUngTuyen = viTriUngTuyenAPI?.map((item, index) => <option key={index} value={item.tenViTri}>{item.tenViTri}</option>)
    const dataHinhThucTuyenSinh = hinhThucTuyenSinh?.map((item, index) => <option key={index} value={item.tenHinhThuc}>{item.tenHinhThuc}</option>)


    const dispatch = useDispatch()

    useEffect(async () => {

        const khoa = await axios.get(`${LOCALHOST_URL_API}/khoa`)
        const viTriUngTuyen = await axios.get(`${LOCALHOST_URL_API}/vi-tri-ung-tuyen`)
        const hinhThucTuyenSinh = await axios.get(`${LOCALHOST_URL_API}/hinh-thuc-tuyen-sinh`)

        setKhoaAPI(khoa.data.data);
        setViTriUngTuyenAPI(viTriUngTuyen.data.data)
        setHinhThucTuyenSinh(hinhThucTuyenSinh.data.data)
        dispatch(getAllUngTuyenNgay())
    }, [dispatch])


    const onClickAction = () => {

    }

    const onSubmitDelete = (id) => {

        dispatch(deleteUngTuyenNgay(id))
        toast.success("Xóa thành công...!!!")
    }

    const onSubmitEdit = (item) => {
        setStatus("EDIT")

    }

    const onSubmitSearch = () => {

        const data = { hoVaTen: hoVaTen, email: emaiHoacSDT, viTriUngTuyen: viTriUngTuyen, khoa: khoa, hinhThucTuyenSinh: hinhThuc }
        dispatch(searchUngTuyenNgay(data))
    }


    const dataContentUngTuyenNgay = dataUngTuyenNgay?.map((item, index) => <tr key={index}>
        <td>{index}</td>
        <td>{item.hoVaTen}</td>
        <td>{item.email}</td>
        <td>{item.viTriUngTuyen}</td>
        <td>{item.khoa}</td>
        <td>{item.hinhThucTuyenSinh}</td>
        <td>{item.thacMac}</td>
        <Action>
            <Button variant="danger" onClick={() => onSubmitDelete(item.Id)}>Xóa</Button>
            {/* <Button variant="info" onClick={() => onSubmitEdit(item)} >Sửa</Button> */}
        </Action>
    </tr>)
    return (
        <ContainerManager>
            <Add>
                {/* <InputGroup size="sm" className="mb-3">
                    <FormControl
                        placeholder="Nhập nội dung..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={contentUngTuyenNgay}
                        onChange={(e) => setContentUngTuyenNgay(e.target.value)}
                    />
                    {status === "ADD" ? <div onClick={() => onClickAction()}> <ButtonAdd /></div>
                        : <div onClick={() => onClickAction()}> <ButtonEdit /></div>}

                    <ToastContainer />
                </InputGroup> */}

                {/* {status === "EDIT" ?
                    <ShowButton onClick={() => setStatus("ADD")}>
                        <ButtonAdd />
                    </ShowButton> : null} */}
            </Add>

            <Form.Group className="mb-3" controlId="formBasicEmail" style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <Form.Control
                    type="text"
                    placeholder="Nhập họ và tên"
                    onChange={(e) => setHoVaTen(e.target.value)}
                />
                <Form.Control
                    type="text"
                    placeholder="Nhập email hoặc sđt"
                    onChange={(e) => setEmailHoacSDT(e.target.value)}
                />
                <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setViTriUngTuyen(e.target.value)}
                >
                    <option value = "">Nhập vị trí</option>
                    {dataViTriUngTuyen?.length > 0 ? dataViTriUngTuyen : null}
                </Form.Select>
                <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setKhoa(e.target.value)}
                >
                    <option value = "">Nhập khoa</option>
                    {dataKhoa?.length > 0 ? dataKhoa : null}
                </Form.Select>
                <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setHinhThuc(e.target.value)}
                >
                    <option value = "">Nhập hình thức</option>
                    {dataHinhThucTuyenSinh?.length > 0 ? dataHinhThucTuyenSinh : null}
                </Form.Select>
                <Button variant="secondary" onClick={() => onSubmitSearch()}>Tìm kiếm</Button>
            </Form.Group>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Họ và tên</th>
                        <th>Email hoặc Sđt</th>
                        <th>Vị trí ứng tuyển</th>
                        <th>Khoa</th>
                        <th>Hình thức tuyển sinh</th>
                        <th>Thắc mắc</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {dataContentUngTuyenNgay?.length > 0 ? dataContentUngTuyenNgay : null}
                </tbody>
            </Table>
        </ContainerManager>

    )
}

export default UngTuyenNgay;

const Action = styled.td`
    display: flex;
    gap: 15px;
`

const Add = styled.div`
    .input-group{
        margin-top: 10px;
        display: flex;
        gap: 15px;
        flex-direction: column;
        width: 50% !important;
        border: 2px solid #e2e2e2;
        border-radius: 3px;
        padding: 15px;
    }
    .form-control{
        width: 100%;
       
    }
`

const ShowButton = styled.style`
    display: flex;
    margin-bottom: 5px;
`