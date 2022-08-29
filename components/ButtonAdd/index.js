import { Button } from "react-bootstrap"
import styled from "styled-components";

const ButtonAdd = () => {

    return (
        <ButtonCreate>
            <Button variant="success" sty>Thêm</Button>
        </ButtonCreate>

    )
}

export default ButtonAdd;

const ButtonCreate = styled.div`
    // margin-bottom: 20px
    display: flex;
    justify-content: end;
    .btn-success {
        width: 100%;
    }
`