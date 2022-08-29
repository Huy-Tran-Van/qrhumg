import Link from 'next/link';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


const MenuLeftManager = () => {
    return (
        <ProSidebar style={{ height: "100vh", position: "fixed" }}>
            <Menu iconShape="square">
                <MenuItem>Quản lý thông tin</MenuItem>
                <SubMenu title="Trang chủ">
                    <Link href="?type=filter-khoa" passHref><MenuItem>Khoa</MenuItem></Link>
                    <Link href="?type=video-gioi-thieu" passHref><MenuItem>Video giới thiệu</MenuItem></Link>
                    <MenuItem href="?type=thong-tin-co-so-vat-chat">Thông tin cơ sở vật chất</MenuItem>
                </SubMenu>
                <SubMenu title="Cơ sở vật chất">
                    <Link href="?type=tin-tuc" passHref><MenuItem>Tin tức</MenuItem></Link>
                    <Link href="?type=them-bai-viet" passHref><MenuItem>Thêm bài viết</MenuItem></Link>

                </SubMenu>
                <SubMenu title="Ứng tuyển">
                    <Link href="?type=chi-tiet-ung-tuyen" passHref><MenuItem>Chi tiết</MenuItem></Link>
                    <Link href="?type=cam-ket-hoc-tap" passHref><MenuItem>Cam kết học tập</MenuItem></Link>
                    <Link href="?type=phuc-loi" passHref><MenuItem>Phúc lợi</MenuItem></Link>
                    <Link href="?type=sinh-vien-thuc-hien" passHref><MenuItem>Sinh viên thực hiện</MenuItem></Link>
                    <Link href="?type=ung-tuyen-ngay" passHref><MenuItem>Ứng tuyển ngay</MenuItem></Link>
                </SubMenu>
                <SubMenu title="Cấu hình">
                    <Link href="?type=khoa" passHref><MenuItem>Khoa</MenuItem></Link>
                    <Link href="?type=vi-tri-ung-tuyen" passHref><MenuItem>Vị trí ứng tuyển</MenuItem></Link>
                    <Link href="?type=hinh-thuc-ung-tuyen" passHref><MenuItem>Hình thức ứng tuyển</MenuItem></Link>
                    <Link href="?type=tai-khoan" passHref><MenuItem>Tài khoản</MenuItem></Link>
                    <Link href="?type=banner" passHref><MenuItem>Banner</MenuItem></Link>

                </SubMenu>
            </Menu>
        </ProSidebar>
    )
}

export default MenuLeftManager;