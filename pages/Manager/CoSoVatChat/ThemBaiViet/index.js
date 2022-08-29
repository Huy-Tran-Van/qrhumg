import { Button, Form } from "react-bootstrap";
import styled from "styled-components";

const ThemBaiViet = () => {

    return (
        <div>

            <div>
                <Lable>Thêm bài viết</Lable>
            </div>

            <div>
                <Form style={{display: "flex", gap: "30px"}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tiêu đề *</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Bộ phận đăng bài</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>

                </Form>
            </div>

        </div>

    )
}

export default ThemBaiViet;

const Lable = styled.h1`


`