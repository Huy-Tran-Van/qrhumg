import { useEffect, useRef, useState } from "react";
import { Form, FormControl, InputGroup, Table } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import ButtonAdd from "../../../../components/ButtonAdd";
import ButtonEdit from "../../../../components/ButtonEdit";
import Paging from "../../../../components/Paging";
import { ContainerManager } from "../../../../components/Styled/style";
import { addSinhVienTuyenDung, deleteSinhVienTuyenDung, getAllSinhVienTuyenDung, searchSinhVienTuyenDung, updateSinhVienTuyenDung } from "../../../../redux/SinhVienThucHien/action";

const SinhVienThucHien = () => {

    const typingTimeoutRef = useRef()
    const [contentSinhVien, setContentSinhVien] = useState("");
    const [status, setStatus] = useState("ADD")
    const [idSinhVien, setIdSinhVien] = useState();

    const { dataSinhVienTuyenDung, loading, maxPage, countData   } = useSelector(state => state.sinhVienTuyenDungReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllSinhVienTuyenDung({
            nextPage: 1,
            limit: 7
        }))
    }, [dispatch, loading])


    const onClickAction = () => {
        if (contentSinhVien) {

            if (status === "ADD") {

                const data = { content: contentSinhVien }
                dispatch(addSinhVienTuyenDung(data))
                toast.success("Thêm thành công...!!!")

            }

            if (status === "EDIT") {

                const data = { id: idSinhVien, content: contentSinhVien }
                dispatch(updateSinhVienTuyenDung(data))
                toast.success("Sửa thành công...!!!")
            }

            setContentSinhVien("")
        } else {

            toast.warning("Vui lòng nhập thông tin ứng tuyển...!!!")
        }
    }

    const onSubmitDelete = (id) => {
        dispatch(deleteSinhVienTuyenDung(id))
        toast.success("Xóa thành công...!!!")
    }

    const onSubmitEdit = (item) => {
        setStatus("EDIT")
        setContentSinhVien(item.content)
        setIdSinhVien(item.Id)
    }

    const onSubmitSearch = (e) => {

        if (typingTimeoutRef.current) {

            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() => { dispatch(searchSinhVienTuyenDung(e)) }, 300)

    }


    const dataContentSinhVienThucHien = dataSinhVienTuyenDung?.map((item, index) => <tr key={index}>
        <td>{index}</td>
        <td>{item.content}</td>
        <Action>
            <Button variant="danger" onClick={() => onSubmitDelete(item.Id)}>Xóa</Button>
            <Button variant="info" onClick={() => onSubmitEdit(item)} >Sửa</Button>
        </Action>
    </tr>)
    return (
        <ContainerManager>
            <Add>
                <InputGroup size="sm" className="mb-3">
                    <FormControl
                        placeholder="Nhập nội dung..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={contentSinhVien}
                        onChange={(e) => setContentSinhVien(e.target.value)}
                    />
                    {status === "ADD" ? <div onClick={() => onClickAction()}> <ButtonAdd /></div>
                        : <div onClick={() => onClickAction()}> <ButtonEdit /></div>}

                    <ToastContainer />
                </InputGroup>

                {status === "EDIT" ?
                    <ShowButton onClick={() => setStatus("ADD")}>
                        <ButtonAdd />
                    </ShowButton> : null}
            </Add>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    type="text"
                    placeholder="Nhập nội dung tìm kiếm"
                    onChange={(e) => onSubmitSearch(e.target.value)}
                />
            </Form.Group>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nội dung</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {dataContentSinhVienThucHien?.length > 0 ? dataContentSinhVienThucHien : null}

                </tbody>
            </Table>

            <Paging type = "SinhVienThucHien" countData = {countData} maxPage = {maxPage} />
        </ContainerManager>

    )
}

export default SinhVienThucHien;

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