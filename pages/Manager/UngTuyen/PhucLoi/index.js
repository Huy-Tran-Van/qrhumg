import { useEffect, useRef, useState } from "react";
import { Form, FormControl, InputGroup, Table } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import ButtonAdd from "../../../../components/ButtonAdd";
import ButtonEdit from "../../../../components/ButtonEdit";
import { ContainerManager } from "../../../../components/Styled/style";
import { addPhucLoiTuyenDung, deletePhucLoiTuyenDung, getAllPhucLoiTuyenDung, searchPhucLoiTuyenDung, updatePhucLoiTuyenDung } from "../../../../redux/PhucLoiTuyenDung/action";

const PhucLoi = () => {

    const typingTimeoutRef = useRef()
    const [contentPhucLoi, setContentPhucLoi] = useState("");
    const [status, setStatus] = useState("ADD")
    const [idPhucLoi, setIdPhucLoi] = useState();

    const { dataPhucLoiTuyenDung, loading } = useSelector(state => state.phucLoiTuyenDungReducer)


    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getAllPhucLoiTuyenDung())
    }, [dispatch, loading])

    const onClickAction = () => {

        if (contentPhucLoi) {

            if (status === "ADD") {

                const data = { content: contentPhucLoi }
                dispatch(addPhucLoiTuyenDung(data))
                toast.success("Thêm thành công...!!!")

            }

            if (status === "EDIT") {

                const data = { id: idPhucLoi, content: contentPhucLoi }
                dispatch(updatePhucLoiTuyenDung(data))
                toast.success("Sửa thành công...!!!")
            }

            setContentPhucLoi("")
        } else {

            toast.warning("Vui lòng nhập thông tin ứng tuyển...!!!")
        }
    }

    const onSubmitDelete = (id) => {

        dispatch(deletePhucLoiTuyenDung(id))
        toast.success("Xóa thành công...!!!")
    }

    const onSubmitEdit = (item) => {

        setStatus("EDIT")
        setContentPhucLoi(item.content)
        setIdPhucLoi(item.Id)
    }

    const onSubmitSearch = (e) => {

        if (typingTimeoutRef.current) {

            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() => { dispatch(searchPhucLoiTuyenDung(e)) }, 300)


    }


    const dataPhucLoi = dataPhucLoiTuyenDung?.map((item, index) => <tr key={index}>
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
                        value={contentPhucLoi}
                        onChange={(e) => setContentPhucLoi(e.target.value)}
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
                    {dataPhucLoi.length > 0 ? dataPhucLoi : null}
                </tbody>
            </Table>
        </ContainerManager>

    )
}

export default PhucLoi;

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