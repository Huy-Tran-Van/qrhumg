import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllChiTietTuyenDung } from "../../../../redux/ChiTietTuyenDung/action";
const ChiTietUngTuyen = () => {

    const {dataChiTietTuyenDung} = useSelector(state => state.chiTietTuyenDungReducer)

    const dataTitleChiTietUngTuyen = dataChiTietTuyenDung?.map((item, index) => <th key={index}>{item.title}</th>)
    const dataContentChiTietUngTuyen = dataChiTietTuyenDung?.map((item, index) =><th key={index}>{item.content}</th> )

    const dispatch = useDispatch()
    useEffect(() => {
        try {
            dispatch(getAllChiTietTuyenDung())
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>STT</th>
                    {dataTitleChiTietUngTuyen?.length > 0 ? dataTitleChiTietUngTuyen : null}

                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    {dataContentChiTietUngTuyen?.length > 0 ? dataContentChiTietUngTuyen : null}
                </tr>
            </tbody>
        </Table>
    )
}

export default ChiTietUngTuyen;