
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { LOCALHOST_URL_API } from "../../../ultis";
import { ToastContainer, toast } from 'react-toastify';
import { getAllKhoa } from "../../../redux/Khoa/action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllViTriUngTuyen } from "../../../redux/ViTriUngTuyen/action";
import { getAllHinhThucUngTuyen } from "../../../redux/HinhThucUngTuyen/action";
import StyledForm from "../../../components/Admissions/Form/styled";

const Form = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [location, setLocation] = useState("")
  const [department, setDepartment] = useState("")
  const [form, setForm] = useState("")
  const [note, setNote] = useState("")

  const { dataKhoa } = useSelector(state => state.khoaReducer)
  const { dataViTriUngTuyen } = useSelector(state => state.viTriUngTuyenReducer)
  const { dataHinhThucUngTuyen } = useSelector(state => state.hinhThucUngTuyenReducer)

  const datacontentKhoa = dataKhoa?.map((item, index) => <option key={index} value={item.tenKhoa}>{item.tenKhoa}</option>)
  const dataContentViTriUngTuyen = dataViTriUngTuyen?.map((item, index) => <option key={index} value={item.tenViTri}>{item.tenViTri}</option>)
  const dataHinhThucTuyenSinh = dataHinhThucUngTuyen?.map((item, index) => <option key={index} value={item.tenHinhThuc}>{item.tenHinhThuc}</option>)

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getAllKhoa())
    dispatch(getAllViTriUngTuyen())
    dispatch(getAllHinhThucUngTuyen())

  }, [dispatch])

  const onSubmitForm = async () => {
    if (name || email || location || department || form) {

      toast.success("Gửi yêu cầu thành công !!! ")

      const data = { hoVaTen: name, email, viTriUngTuyen: location, khoa: department, hinhThucTuyenSinh: form, thacMac: note };
      await axios.post(`${LOCALHOST_URL_API}/ung-tuyen-ngay`, data)

      setName("")
      setEmail("")
      setLocation("")
      setDepartment("")
      setForm("")
      setNote("")
    } else {
      toast.error("Vui lòng nhập đầy đủ thông tin !!!")
    }
  }
  return (
    <StyledForm.WrapperForm>
      <StyledForm.TitleForm>Ứng tuyển ngay</StyledForm.TitleForm>
      <StyledForm.BodyForm>
        <StyledForm.ContentForm>
          <StyledForm.WrapperInput>
            <StyledForm.InputName type="text" placeholder="Họ và tên" onChange={(e) => setName(e.target.value)} />
            <StyledForm.InputEmail
              type="text"
              placeholder="Email hoặc Số điên thoại..."
              onChange={(e) => setEmail(e.target.value)}
            ></StyledForm.InputEmail>
          </StyledForm.WrapperInput>
          <StyledForm.WrapperInput>
            <StyledForm.Select onChange={(e) => setLocation(e.target.value)}>
              <option>Vị trí ứng tuyển</option>
              {dataContentViTriUngTuyen?.length > 0 ? dataContentViTriUngTuyen :
                <>
                  <option>Hệ đại học</option>
                  <option>Hệ cao đẳng</option>
                </>
              }

            </StyledForm.Select>
            <StyledForm.SelectDepartment onChange={(e) => setDepartment(e.target.value)}>
              <option>Chọn khoa</option>
              {datacontentKhoa?.length > 0 ? datacontentKhoa : <>
                <option>Khoa CNTT</option>
                <option>Khoa kinh tế</option>
                <option>Khoa dầu khí</option>
              </>}
            </StyledForm.SelectDepartment>
          </StyledForm.WrapperInput>
          <StyledForm.WrapperInput>
            <StyledForm.AdmissionForm onChange={(e) => setForm(e.target.value)}>
              <option>Hình thức tuyển sinh</option>
              {dataHinhThucTuyenSinh?.length > 0 ? dataHinhThucTuyenSinh : <>
                <option>Học bạ (cấp 3)</option>
                <option>Điểm thi đại học</option>
              </>
              }

            </StyledForm.AdmissionForm>
          </StyledForm.WrapperInput>
          <StyledForm.TextArea placeholder="Nhập thắc mắc của bạn (nếu có)" onChange={(e) => setNote(e.target.value)} />
          {/* <StyledForm.WrapperInputPoint>
            <StyledForm.InputPoint
              value={maths}
              onChange={(e) => setMaths(e.target.value)}
              type="number"
              placeholder="Điểm toán"
            />
           
          </StyledForm.WrapperInputPoint> */}
        </StyledForm.ContentForm>
        <Button className="primary" onClick={() => onSubmitForm()}>ỨNG TUYỂN NGAY</Button>
        <ToastContainer />
      </StyledForm.BodyForm>
    </StyledForm.WrapperForm>
  );
};

export default Form;
