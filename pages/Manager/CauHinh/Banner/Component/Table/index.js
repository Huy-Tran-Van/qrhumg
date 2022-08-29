import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { LOCALHOST_URL_API } from '../../../../../../ultis';

const TableBanner = ({dataBannerContainer}) => {
    const [dataBanner, setDataBanner] = useState([])
    console.log("dataBanner", dataBanner.length);

    useEffect(() => {

        const getBanner = async () => {
            const res = await axios.get(`${LOCALHOST_URL_API}/banner`)
            console.log("ress", res.data.data);
            setDataBanner(res.data.data)
        }
        getBanner()
    }, [dataBannerContainer])

    const onSubmitDelete = async (id) => {
        const res = await axios.delete(`${LOCALHOST_URL_API}/banner/${id}`)
        if (res) {
            setDataBanner(dataBanner.filter((item) => item.Id !== id))

        }
    }

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên ảnh</th>
                        <th scope="col">Ảnh</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {dataBanner.length > 0 ?
                        dataBanner?.map((item, index) => (
                            <tr key={item.Id}>
                                <th scope="row">{index}</th>
                                <td>{item.name}</td>
                                <td><img src={`${LOCALHOST_URL_API}/${item.url}`} alr={item.name} /></td>
                                <td><Action>
                                    <Button variant="danger" onClick={() => onSubmitDelete(item.Id)}>Xóa</Button>
                                </Action></td>
                            </tr>
                        )) : null}
                </tbody>
            </table>
        </div>
    )
}
export default TableBanner;

const Action = styled.td`
    display: flex;
    gap: 15px;
`
