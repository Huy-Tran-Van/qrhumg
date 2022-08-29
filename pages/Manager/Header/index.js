import styled from "styled-components";
import { IoIosNotifications } from "react-icons/io"
import { LOCALHOST_URL_API } from "../../../ultis";
import { useEffect, useState } from "react";


const HeaderManager = ({ dataTaiKhoan }) => {

    const [avatar, setAvatar] = useState("")

    useEffect(() => {
        if (dataTaiKhoan) {

            setAvatar(dataTaiKhoan.avatar)
        }
    }, [dataTaiKhoan])

    return (
        <>
            <Header>
                <IoIosNotifications fontSize={24} />
                <Avatar>
                    <ImagesAvatar src={`${LOCALHOST_URL_API}/${avatar}`} />
                </Avatar>
            </Header>
        </>

    )
}

export default HeaderManager;

const Header = styled.header`

    background: #2fa4e7;
    height: 50px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 25px;
`

const Avatar = styled.div`

  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #e2e2e2;
  margin-right: 30px;
  overflow: hidden;
`

const ImagesAvatar = styled.img`

    width: 100%;
    height: 100%;
`

