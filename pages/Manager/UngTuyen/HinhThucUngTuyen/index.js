import { useEffect, useRef, useState } from "react";
import { Form, FormControl, InputGroup, Table } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import ButtonAdd from "../../../../components/ButtonAdd";
import ButtonEdit from "../../../../components/ButtonEdit";
import { ContainerManager } from "../../../../components/Styled/style";
import { addHinhThucUngTuyen, deleteHinhThucUngTuyen, getAllHinhThucUngTuyen, searchHinhThucUngTuyen, updateHinhThucUngTuyen } from "../../../../redux/HinhThucUngTuyen/action";

const HinhThucUngTuyen = () => {

    const typingTimeoutRef = useRef()
    const [contentHinhThuc, setContentHinhThuc] = useState("");
    const [status, setStatus] = useState("ADD")
    const [idHinhThuc, setIdHinhThuc] = useState();

    const { dataHinhThucUngTuyen, loading } = useSelector(state => state.hinhThucUngTuyenReducer)


    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getAllHinhThucUngTuyen({
            nextPage: 1,
            limit: 7
        }))
    }, [dispatch, loading])

    const onClickAction = () => {

        if (contentHinhThuc) {

            if (status === "ADD") {

                const data = { tenHinhThuc: contentHinhThuc }
                dispatch(addHinhThucUngTuyen(data))
                toast.success("Thêm thành công...!!!")

            }

            if (status === "EDIT") {

                const data = { id: idHinhThuc, content: contentHinhThuc }
                dispatch(updateHinhThucUngTuyen(data))
                toast.success("Sửa thành công...!!!")
            }

            setContentHinhThuc("")
        } else {

            toast.warning("Vui lòng nhập thông tin ứng tuyển...!!!")
        }
    }

    const onSubmitDelete = (id) => {

        dispatch(deleteHinhThucUngTuyen(id))
        toast.success("Xóa thành công...!!!")
    }

    const onSubmitEdit = (item) => {

        setStatus("EDIT")
        setContentHinhThuc(item.tenHinhThuc)
        setIdHinhThuc(item.Id)
    }

    const onSubmitSearch = (e) => {
        if (typingTimeoutRef.current) {

            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() => { dispatch(searchHinhThucUngTuyen(e)) }, 300)


    }


    const dataContentHinhThuc = dataHinhThucUngTuyen?.map((item, index) => <tr key={index}>
        <td>{index}</td>
        <td>{item.tenHinhThuc}</td>
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
                        value={contentHinhThuc}
                        onChange={(e) => setContentHinhThuc(e.target.value)}
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
                    {dataContentHinhThuc?.length > 0 ? dataContentHinhThuc : null}
                </tbody>
            </Table>
        </ContainerManager>

    )
}

export default HinhThucUngTuyen;

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

const WrapperInFomation = styled.div`
    height: 70vh;
    overflow: hidden;
    overflow-y: scroll;
` 