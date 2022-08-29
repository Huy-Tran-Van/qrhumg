import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCamKetTuyenDung } from "../../redux/CamKetTuyenDung/action";
import { getAllKhoa } from "../../redux/Khoa/action";
import { getAllSinhVienTuyenDung } from "../../redux/SinhVienThucHien/action";
import  StyledPaging  from "./styled";

const Paging = ({ countData, maxPage, type }) => {
      const [page, setPage] = useState(1)
      const dispatch = useDispatch()
      const onSubmitFirstPage = () => {
            setPage(1)
            const nextPage = 1

            if (type === "Khoa") {
                  dispatch(getAllKhoa({
                        nextPage,
                        limit: 7
                  }))
            }

            if (type === "SinhVienThucHien") {
                  dispatch(getAllSinhVienTuyenDung({
                        nextPage,
                        limit: 7
                  }))
            }

            if (type === "CamKetHocTap") {
                  dispatch(getAllCamKetTuyenDung({
                        nextPage,
                        limit: 7
                  }))
            }


      }
      const onSubmitNextPage = () => {

            if (page !== maxPage) {


                  const nextPage = page + 1;

                  setPage(nextPage)

                  if (type === "Khoa") {
                        dispatch(getAllKhoa({
                              nextPage,
                              limit: 7
                        }))
                  }

                  if (type === "SinhVienThucHien") {
                        dispatch(getAllSinhVienTuyenDung({
                              nextPage,
                              limit: 7
                        }))
                  }

                  if (type === "CamKetHocTap") {
                        dispatch(getAllCamKetTuyenDung({
                              nextPage,
                              limit: 7
                        }))
                  }
            }

      }

      const onSubmitBackPage = () => {
            if (page !== 1) {

                  const nextPage = page - 1;

                  setPage(nextPage)

                  if (type === "Khoa") {
                        dispatch(getAllKhoa({
                              nextPage,
                              limit: 7
                        }))
                  }

                  if (type === "SinhVienThucHien") {
                        dispatch(getAllSinhVienTuyenDung({
                              nextPage,
                              limit: 7
                        }))
                  }

                  if (type === "CamKetHocTap") {
                        dispatch(getAllCamKetTuyenDung({
                              nextPage,
                              limit: 7
                        }))
                  }
            }
      }

      const onSubmitLastPage = () => {
            setPage(maxPage)
            const nextPage = maxPage

            if (type === "Khoa") {
                  dispatch(getAllKhoa({
                        nextPage,
                        limit: 7
                  }))
            }

            if (type === "SinhVienThucHien") {
                  dispatch(getAllSinhVienTuyenDung({
                        nextPage,
                        limit: 7
                  }))
            }

            if (type === "CamKetHocTap") {
                  dispatch(getAllCamKetTuyenDung({
                        nextPage,
                        limit: 7
                  }))
            }
      }
      return <StyledPaging.WrapperPaing>
            <StyledPaging.Result>
                  có {countData} kết quả
            </StyledPaging.Result>
            <StyledPaging.PageFirst onClick={() => onSubmitFirstPage()} page={page} maxPage={maxPage}>
                  Đầu
            </StyledPaging.PageFirst>
            <StyledPaging.BackPage onClick={() => onSubmitBackPage()} page={page} maxPage={maxPage}>
                  Trước
            </StyledPaging.BackPage>
            <StyledPaging.PageFirst>
                  {page}
            </StyledPaging.PageFirst>
            <StyledPaging.NextPage onClick={() => onSubmitNextPage()} page={page} maxPage={maxPage}>
                  Sau
            </StyledPaging.NextPage>
            <StyledPaging.LastPage page={page} maxPage={maxPage} onClick={() => onSubmitLastPage()}>
                  Cuối
            </StyledPaging.LastPage>
      </StyledPaging.WrapperPaing>
            ;
};

export default Paging;
