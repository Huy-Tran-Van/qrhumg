import styled from "styled-components";
import { ToastContainer } from "react-toastify"
import ButtonAdd from "../../../../components/ButtonAdd";
import ButtonEdit from "../../../../components/ButtonEdit";
import { FormControl, InputGroup, Table } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteVideo, getAllVideo, postVideo } from "../../../../redux/Video/action";
import { Button } from "react-bootstrap";
import { ContainerManager } from "../../../../components/Styled/style";
import ReactPlayer from "react-player";



const Video = () => {

    const [textVideo, setTextVideo] = useState('')
    const [status, setStatus] = useState("ADD")

    const { dataVideo } = useSelector(state => state.videoReducer)

    const video = dataVideo?.map((item, index) =>
        <tr key={index}>
            <td>{index}</td>
            <td><ReactPlayer className="video" url={item.video} key={index}></ReactPlayer></td>

            <Action>
                <Button variant="danger" onClick={() => onSubmitActionVideo(item.Id)}>Xóa</Button>
            </Action>
        </tr>)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getAllVideo())
    }, [dispatch])

    const onClickAction = () => {

        const data = { video: textVideo }
        dispatch(postVideo({ data }))
    }

    const onSubmitActionVideo = (id) => {
        dispatch(deleteVideo({ id: id }))
    }

    return (

        <ContainerManager>
            <ToastContainer />

            <Add>
                <InputGroup size="sm" className="mb-3">

                    <FormControl
                        placeholder="Nhập link video..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        className="text"
                        // value={contentCamKet}
                        onChange={(e) => setTextVideo(e.target.value)}
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

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Video</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {video.length > 0 ? video : null}
                </tbody>
            </Table>
        </ContainerManager>
    )
}

export default Video;

const Action = styled.td`
    display: flex;
    gap: 15px;
`

const Add = styled.div`
    .input-group{
        margin-top: 10px;
        display: flex;
        gap: 15px;
        width: 30% !important;
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