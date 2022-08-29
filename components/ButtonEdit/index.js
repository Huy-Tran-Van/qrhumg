import { Button } from "react-bootstrap"
import styled from "styled-components";

const ButtonEdit = () => {

    return (
        <ButtonFix>
            <Button variant="success" sty>Sửa</Button>
        </ButtonFix>

    )
}

export default ButtonEdit;

const ButtonFix = styled.div`
    // margin-bottom: 20px
    display: flex;
    justify-content: end;
    .btn-success {
        width: 100%;
    }
}
`