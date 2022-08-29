import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Form, FormControl, InputGroup, Table } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import ButtonAdd from "../../../../components/ButtonAdd";
import ButtonEdit from "../../../../components/ButtonEdit";
import { ContainerManager } from "../../../../components/Styled/style";
import { getAllKhoa, getAllKhoaFilter, postKhoaFilter } from "../../../../redux/Khoa/action";
import axios from "axios"
import { LOCALHOST_URL_API } from "../../../../ultis";

const FilterKhoa = () => {

    const typingTimeoutRef = useRef()
    const [contentCamKet, setContentCamKet] = useState("");
    const [status, setStatus] = useState("ADD")
    const [idCamket, setIdCamKet] = useState();

    const [khoa, setKhoa] = useState()
    const [logo, setLogo] = useState("")
    const [perison, setPersion] = useState("")
    const [introduce, setIntroduce] = useState("")
    const [video, setVideo] = useState("")
    const [link, setLink] = useState("")



    const { dataKhoa, dataAllKhoaFilter } = useSelector(state => state.khoaReducer)

    const dispatch = useDispatch()

    useEffect(async () => {

        dispatch(getAllKhoa())
        dispatch(getAllKhoaFilter())
    }, [dispatch])

    const onClickAction = () => {

        const data = { maKhoa: khoa, imageLogo: logo, imgGioiThieu: introduce, imgPersion: perison, video: video, link }
        console.log("data", data);
        dispatch(postKhoaFilter(data))
        // if (contentCamKet) {

        //     if (status === "ADD") {

        //         const data = { content: contentCamKet }
        //         dispatch(addCamKetTuyenDung(data))
        //         toast.success("Thêm thành công...!!!")

        //     }

        //     if (status === "EDIT") {

        //         const data = { id: idCamket, content: contentCamKet }
        //         dispatch(updateCamKetTuyenDung(data))
        //         toast.success("Sửa thành công...!!!")
        //     }

        //     setContentCamKet("")
        // } else {

        //     toast.warning("Vui lòng nhập thông tin ứng tuyển...!!!")
        // }
    }

    const onSubmitDelete = (id) => {

        // dispatch(deleteCamKetTuyenDung(id))
        // toast.success("Xóa thành công...!!!")
    }

    const onSubmitEdit = (item) => {
        // setStatus("EDIT")
        // setContentCamKet(item.content)
        // setIdCamKet(item.Id)
    }

    const onSubmitSearch = (e) => {
        // if (typingTimeoutRef.current) {

        //     clearTimeout(typingTimeoutRef.current)
        // }

        // typingTimeoutRef.current = setTimeout(() => { dispatch(searchCamKetTuyenDung(e)) }, 300)
    }

    const uploadFile = async ({ e, type }) => {

        let file = e
        const formData = new FormData()
        formData.append("images", file)
        formData.append("name", "huy")
        const res = await axios.post(`${LOCALHOST_URL_API}/upload`, formData)
        if (type === "logo") {

            setLogo(res.data.name)
        }
        else if (type === "persion") {

            setPersion(res.data.name)
        }
        else {

            setIntroduce(res.data.name)
        }

    }

    const dataAll = dataAllKhoaFilter?.map((item, index) => <tr key={index}>
        <td>{index}</td>
        <td>{item.tenKhoa}</td>
        <td>
            <img src={`${LOCALHOST_URL_API}/${item.imageLogo}`} alt="" />
        </td>
        <td>
            <img src={`${LOCALHOST_URL_API}/${item.imgPersion}`} alt="" />
        </td>
        <td>
            {item.video}
        </td>
        <td>
            <img src={`${LOCALHOST_URL_API}/${item.imgGioiThieu}`} alt="" />
        </td>
        <td>
            <Link href={`${item.link}`}>
                <a>
                    {item.link}
                </a>
            </Link>
        </td>

        <Action>
            <Button variant="danger" onClick={() => onSubmitDelete(item.Id)}>Xóa</Button>
            <Button variant="info" onClick={() => onSubmitEdit(item)} >Sửa</Button>
        </Action>
    </tr>)

    const SelectKhoa = dataKhoa?.map((item, index) => <option key={index} value={item.Id}>
        {item.tenKhoa}
    </option>)


    return (
        <ContainerManager>
            <ToastContainer />
            <Add>
                <InputGroup size="sm" className="mb-3">
                    <Form.Select aria-label="Default select example" style={{ width: "100%" }} onChange={(e) => setKhoa(e.target.value)}>
                        <option>Chọn khoa</option>
                        {SelectKhoa?.length ? SelectKhoa : null}
                    </Form.Select>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Logo</Form.Label>
                        <Form.Control type="file" onChange={(e) => uploadFile({ e: e.target.files[0], type: "logo" })} />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Người đại diện</Form.Label>
                        <Form.Control type="file" onChange={(e) => uploadFile({ e: e.target.files[0], type: "persion" })} />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3 ">
                        <Form.Label>Ảnh giới thiệu</Form.Label>
                        <Form.Control type="file" onChange={(e) => uploadFile({ e: e.target.files[0], type: "introduce" })} />
                    </Form.Group>

                    <FormControl
                        placeholder="Nhập link video..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        className="text"
                        // value={contentCamKet}
                        onChange={(e) => setVideo(e.target.value)}
                    />

                    <FormControl
                        placeholder="Nhập link giới thiệu..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        className="text"
                        // value={contentCamKet}
                        onChange={(e) => setLink(e.target.value)}
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
            <div style={{ height: "300px", overflow: "hidden", overflowY: "scroll", position: "absolute" }}>
                <Table scrollY striped bordered hover >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên khoa</th>
                            <th>Logo</th>
                            <th>Người đại diên</th>
                            <th>Video</th>
                            <th>Giới Thiệu</th>
                            <th>Link giới thiệu</th>
                            <th>Hành đồng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataAll?.length > 0 ? dataAll : null}
                    </tbody>
                </Table>

            </div>

            {/* <Paging type="CamKetHocTap" countData={countData} maxPage={maxPage} /> */}
        </ContainerManager>

    )
}

export default FilterKhoa;

const Action = styled.td`
    display: flex;
    gap: 15px;
`

const Add = styled.div`
    .input-group{
        margin-top: 10px;
        display: flex;
        gap: 15px;
        width: 100% !important;
        border: 2px solid #e2e2e2;
        border-radius: 3px;
        padding: 15px;
    }
    .form-control{
        width: 100%;
       
    }

    .text {
        width: 180px !important;
    }
`

const ShowButton = styled.style`
    display: flex;
    margin-bottom: 5px;
`