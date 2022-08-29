import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ContainerManager } from '../../../../../../components/Styled/style';
import { LOCALHOST_URL_API, URL_API } from '../../../../../../ultis';

const UploadBanner = ({ dataBanner }) => {
    const [banner, setBanner] = useState()
    const [loading, setLoading] = useState(false);


    const onSubmitEditAvatar = async (e) => {

        let file = e
        const formData = new FormData()
        formData.append("images", file)
        formData.append("name", "huy")

        const res = await axios.post(`${LOCALHOST_URL_API}/upload`, formData)
        console.log("res", res);
        if (res) {
            // console.log("res.data", res);
            setBanner(res?.data?.name)
            const data = { name: res?.data?.name, url: res?.data?.name }
            axios.post(`${LOCALHOST_URL_API}/banner`, data).then(data => dataBanner(data.data.data))

        }

    }

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                <input id="files" accept="image/*" style={{ display: "none" }} type="file" onChange={(e) => onSubmitEditAvatar(e.target.files[0])} />
                <Button variant="primary" style={{ width: "20%" }}> <label htmlFor="files" className="btn">Thêm banner</label></Button>
            </div>
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
            // showUploadList={false}
            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            // beforeUpload={beforeUpload}
            // onChange={handleChange}
            >
                {banner ? (
                    <img
                        src={`${LOCALHOST_URL_API}/${banner}`}
                        alt="avatar"
                        style={{
                            width: '100%',
                        }}
                    />
                ) : (
                    uploadButton
                )}
            </Upload>
        </div>

    );
};

export default UploadBanner;