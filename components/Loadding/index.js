import { Space, Spin, Skeleton } from 'antd';
import React from 'react';

const Loading = ({ type }) => (
    <>
        {type === "Spint" && <Space size="middle">
            <Spin size="small" />
        </Space>}
        {type === "Skeleton" && <Skeleton />}
    </>

);

export default Loading;