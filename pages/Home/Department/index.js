import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllKhoa, getKhoaFilter } from "../../../redux/Khoa/action";
import { LOCALHOST_URL_API } from "../../../ultis";
import  StyledDepartment  from "../../../components/Home/Department/styled";
import ReactPlayer from "react-player";
import Loading from "../../../components/Loadding";



const ValueDeparment = ({ dataKhoaFilter }) => {
  console.log("dataKhoaFilter", dataKhoaFilter);
  return (
    <StyledDepartment.Wrapper>
      <StyledDepartment.DepartmentLeft>
        <StyledDepartment.LogoDepartment>
          {dataKhoaFilter?.imageLogo ? <img src={`${LOCALHOST_URL_API}/${dataKhoaFilter?.imageLogo}`} /> : <Loading type="Spint" />}
        </StyledDepartment.LogoDepartment>
        <StyledDepartment.VideoDepartment>
          {dataKhoaFilter?.video ? <ReactPlayer className="video" url={dataKhoaFilter?.video}></ReactPlayer> : <Loading type="Spint" />}
        </StyledDepartment.VideoDepartment>
      </StyledDepartment.DepartmentLeft>
      <StyledDepartment.DepartmentRight>
        <StyledDepartment.ImagePersionDepartment>
          {dataKhoaFilter?.imgPersion ? <img src={`${LOCALHOST_URL_API}/${dataKhoaFilter?.imgPersion}`} /> : <Loading type="Spint" />}
        </StyledDepartment.ImagePersionDepartment>
        <Link href={`${dataKhoaFilter?.link}`}>
          <a>
            <StyledDepartment.ImageIntroduceDeparment>
              {dataKhoaFilter?.imgGioiThieu ? <img src={`${LOCALHOST_URL_API}/${dataKhoaFilter?.imgGioiThieu}`} alt="" /> : <Loading type="Spint" />}
            </StyledDepartment.ImageIntroduceDeparment>
          </a>

        </Link>
      </StyledDepartment.DepartmentRight>
    </StyledDepartment.Wrapper>
  );
};
const FilterDeparment = () => {


  const [nextPage, setNextPage] = useState(1)

  const { dataKhoa } = useSelector(state => state.khoaReducer)

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getAllKhoa({
      limit: 5,
      nextPage: nextPage
    }))

  }, [dispatch, nextPage])

  useEffect(() => {

    if (dataKhoa.length > 0) {
      dispatch(getKhoaFilter(dataKhoa[0].Id))
    }
  }, [dispatch, dataKhoa])

  const onSubmitFilter = (id) => {

    dispatch(getKhoaFilter(id))
  }

  // const onSubmitPaging = () => {

  //   const limitPage = limit + 5;
  //   const page = nextPage + 1

  //   setNextPage(page)
  //   setLimit(limitPage)
  //   dispatch(getAllKhoa({
  //     limit: 5,
  //     nextPage: page
  //   }))
  // }
  return (

    <StyledDepartment.ItemDeparment>
      {dataKhoa && dataKhoa.length > 0 ? dataKhoa?.map((item, index) => (
        <StyledDepartment.ContentDeparment image={item.image} key={index} onClick={() => onSubmitFilter(item.Id)}>
          <img src="/Images/ai.jpg" alt="" />
          <div>{item.tenKhoa}</div>
        </StyledDepartment.ContentDeparment>
      )) : null}
      <StyledDepartment.SeeMore onClick={() => setNextPage(nextPage + 1)}>Xem thêm</StyledDepartment.SeeMore>
    </StyledDepartment.ItemDeparment>
  );
};
const Department = () => {
  const { dataKhoaFilter } = useSelector(state => state.khoaReducer)
  return (
    <StyledDepartment.WrapperView>
      <ValueDeparment dataKhoaFilter={dataKhoaFilter} />
      <FilterDeparment />
    </StyledDepartment.WrapperView>
  );
};
export default Department;
