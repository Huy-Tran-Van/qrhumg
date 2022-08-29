import React, { useEffect } from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSinhVienTuyenDung } from "../../../redux/SinhVienThucHien/action";
import { getAllCamKetTuyenDung } from "../../../redux/CamKetTuyenDung/action";
import { getAllPhucLoiTuyenDung } from "../../../redux/PhucLoiTuyenDung/action";
import { getAllChiTietTuyenDung } from "../../../redux/ChiTietTuyenDung/action";
import StyledDetail from "../../../components/Admissions/Detail/styled";

const Detail = () => {
  const infoDetail = [
    {
      id: 1,
      icon: "",
      title: "Học phí",
      content: "316-325k (tín)",
    },
    {
      id: 1,
      icon: "",
      title: "Số lượng tuyển",
      content: "30.000",
    },
    {
      id: 1,
      icon: "",
      title: "Đại điểm",
      content: "Cơ sở Hà Nội",
    },
    {
      id: 1,
      icon: "",
      title: "Cấp bậc",
      content: "Đại học | Cao đẳng",
    },
    {
      id: 1,
      icon: "",
      title: "Hình thức học",
      content: "Tín chỉ",
    },
    {
      id: 1,
      icon: "",
      title: "Năm học",
      content: "3 - 5 năm",
    },
    {
      id: 1,
      icon: "",
      title: "Giới tính",
      content: "Không yêu cầu",
    },
    {
      id: 1,
      icon: "",
      title: "Hạn nộp hồ sơ",
      content: "05/01/2022",
    },
  ]

  // 
  const { dataChiTietTuyenDung } = useSelector(state => state.chiTietTuyenDungReducer)
  const { dataSinhVienTuyenDung } = useSelector(state => state.sinhVienTuyenDungReducer)
  const { dataCamKetTuyenDung } = useSelector(state => state.camKetTuyenDungReducer)
  const { dataPhucLoiTuyenDung } = useSelector(state => state.phucLoiTuyenDungReducer)

  // Map du lieu trang tuyen dung
  const dataCamket = dataCamKetTuyenDung?.map((item, index) => <li key={index}>{item.content}</li>)
  const dataPhucLoi = dataPhucLoiTuyenDung?.map((item, index) => <li key={index}>{item.content}</li>)
  const dataSinhVienThucHien = dataSinhVienTuyenDung?.map((item, index) => <li key={index}>{item.content}</li>)

  const dispatch = useDispatch()

  useEffect(() => {
    try {

      dispatch(getAllChiTietTuyenDung())
      dispatch(getAllCamKetTuyenDung())
      dispatch(getAllSinhVienTuyenDung())
      dispatch(getAllPhucLoiTuyenDung())

    } catch (error) {
      console.log("error", error);
    }

  }, [dispatch])
  return (
    <StyledDetail.WrapperDetail>
      <StyledDetail.WrapperTitle>
        <StyledDetail.TitleDetail>
          Chi tiết tin tuyển dụng
        </StyledDetail.TitleDetail>
      </StyledDetail.WrapperTitle>
      <StyledDetail.InfoDetal>
        <StyledDetail.DetailLeft>
          <StyledDetail.InfoLeft>
            <StyledDetail.NameDetail>Chi tiết</StyledDetail.NameDetail>
            <StyledDetail.WrapperItemDetail>
              {dataChiTietTuyenDung.length > 0 ? dataChiTietTuyenDung.map((item, index) => (
                <StyledDetail.ItemDetail key={index}>
                  <StyledDetail.ContentDetail>
                    <StyledDetail.WrapperIcon>
                      <RiMoneyDollarCircleLine />
                    </StyledDetail.WrapperIcon>
                    <StyledDetail.TitleContent>
                      <span>{item.title}</span>
                      <p>{item.content}</p>
                    </StyledDetail.TitleContent>
                  </StyledDetail.ContentDetail>
                </StyledDetail.ItemDetail>
              )) : infoDetail.map((item, index) => (
                <StyledDetail.ItemDetail key={index}>
                  <StyledDetail.ContentDetail>
                    <StyledDetail.WrapperIcon>
                      <RiMoneyDollarCircleLine />
                    </StyledDetail.WrapperIcon>
                    <StyledDetail.TitleContent>
                      <span>{item.title}</span>
                      <p>{item.content}</p>
                    </StyledDetail.TitleContent>
                  </StyledDetail.ContentDetail>
                </StyledDetail.ItemDetail>
              ))}
            </StyledDetail.WrapperItemDetail>
          </StyledDetail.InfoLeft>
          <StyledDetail.InfoLeft>
            <StyledDetail.NameDetail>Phúc lợi</StyledDetail.NameDetail>
            <ul>
              {dataPhucLoi?.length > 0 ? dataPhucLoi :
                <>
                  <li>
                    Chế độ khen thưởng, học bổng: sinh viên có cơ hội nhận học bổng
                    toàn phần 100% và 130%
                  </li>
                  <li>
                    Chính sách xã hội: sinh viên tham gia bảo hiểm y tế, giảm học
                    phí cho gia đình khó khăn
                  </li>
                </>}

            </ul>
          </StyledDetail.InfoLeft>
        </StyledDetail.DetailLeft>
        <StyledDetail.DetailRight>
          <StyledDetail.InfoLeft>
            <StyledDetail.NameDetail>
              Cam kết/Quá trính học tập
            </StyledDetail.NameDetail>
            <ul>
              {dataCamket?.length > 0 ? dataCamket : <>  <li>
                Sinh viên học trực tiếp hoặc học trực tuyến theo quy đinh của
                nhà trường
              </li>
                <li>Thời gian học tập 3 năm (cao đẳng), 6 năm (đại học)</li>
                <li>
                  Sinh viên gia đình khó khăn hoặc bị bệnh có thể xin nghỉ hoặc
                  làm đơn bảo lưu (tối đa 1 năm)
                </li>
                <li>
                  Số lượng môn học theo tín chỉ, được nhà trường sắp xếp theo niêm
                  giám hoặc sinh viên có thể tự đăng ký
                </li>
                <li>
                  Cam kết sinh viên được đi thực tập tại các doanh nghiêp do nhà
                  trường tổ chức
                </li>
                <li>
                  Sinh viên được tạo điều kiện đi tu nghiệp sinh tại các nước như: Nhật, Đức,...
                </li>
                <li>
                  Hỗ trợ trinh viên có như cầu đào tạo cán bộ trong 3 tháng...
                </li></>}

            </ul>
          </StyledDetail.InfoLeft>
          <StyledDetail.InfoLeft>
            <StyledDetail.NameDetail>
              Sinh viên thực hiện
            </StyledDetail.NameDetail>
            <ul>
              {dataSinhVienThucHien?.length > 0 ? dataSinhVienThucHien : <>
                <li>
                  Đi học đầy đủ, không nghỉ quá thời gian cho phép theo quy định
                  của nhà trường
                </li>
                <li>
                  Đóng học phí đầy đủ, trường hợp không đóng học phí sẽ bị cấm thi
                </li>
                <li>Bắt buộc tham gia bảo hiểm y tế</li>
                <li>
                  Tham gia sinh hoạt lớp đẩy đủ, hoạt động do nhà trường hoặc khoa
                  tổ chức
                </li></>}

            </ul>
          </StyledDetail.InfoLeft>
        </StyledDetail.DetailRight>
      </StyledDetail.InfoDetal>
    </StyledDetail.WrapperDetail>
  );
};

export default Detail;

