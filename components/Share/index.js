
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton
} from "react-share";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { MdQrCode2 } from "react-icons/md"
import styled from "styled-components";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import QRCode from "qrcode.react";
import { URL_SERVER_WEB } from "../../ultis";


const Share = ({ dataNew }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <ContainerShare>
            <div>Chia sẻ: </div>
            <FacebookShareButton
                className="btnShare facebook"
                url={`${URL_SERVER_WEB}/InfrastructureDetail/${dataNew?.attributes?.slug}`}
            >
                <FaFacebookSquare fontSize={24} />
            </FacebookShareButton>
            <EmailShareButton
                url={`${URL_SERVER_WEB}/InfrastructureDetail/${dataNew?.attributes?.slug}`}
                subject={dataNew?.attributes?.Title}
                body={`${dataNew?.attributes?.Title}`}
            >
                <AiOutlineMail fontSize={24} />
            </EmailShareButton>
            <TwitterShareButton
                className="btnShare twitter"
                url={`${URL_SERVER_WEB}/InfrastructureDetail/${dataNew?.attributes?.slug}`}
            >
                <FaTwitterSquare fontSize={24} />
            </TwitterShareButton>

            <MdQrCode2 cursor={"pointer"} fontSize={24} onClick={handleShow} />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Chia sẻ: </Modal.Title>
                </Modal.Header>
                <Modal.Body className="body-modal" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>

                    <QRCode
                        id="qrcode"
                        value={`${URL_SERVER_WEB}/InfrastructureDetail/${dataNew?.attributes?.slug}`}
                        size={250}
                        level={"H"}
                        includeMargin={true}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </ContainerShare>
    )
}

export default Share;


const ContainerShare = styled.div`
    
    display: flex;
    gap: 15px;
    align-items: center;
    .modal-body {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`