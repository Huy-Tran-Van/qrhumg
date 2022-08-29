import styled from "styled-components";

export const StyledDepartment = {
  WrapperView: styled.div`
    margin-bottom: 45px;
  `,
  Wrapper: styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    padding: 45px 135px 0;
    margin-bottom: 30px;
  `,
  DepartmentLeft: styled.div`
    width: 50%;
  `,
  LogoDepartment: styled.div`
    display: flex;
    position: relative;
    height: 270px;
    justify-content: center;
    background-color: #fff;
    margin-bottom: 30px;
    border-radius: 5px;
  `,
  VideoDepartment: styled.div`
    height: 450px;
    display: flex;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
    .video {
      height: 100% !important;
    }
  `,
  ImagePersionDepartment: styled.div`
    display: flex;
    margin-bottom: 30px;
    border-radius: 5px;
    height: 450px;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    img {
      width: 100%;
      height: 450px;
    }
  `,
  ImageIntroduceDeparment: styled.div`
    display: flex;
    border-radius: 5px;
    height: 270px;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    img {
      width: 100%;
      height: 270px;
    }
  `,
  DepartmentRight: styled.div`
    width: 50%;
  `,
  ItemDeparment: styled.div`
    display: flex;
    padding: 0 135px;
    justify-content: space-between;
  `,
  ContentDeparment: styled.div`
    border-radius: 5px;
    width: 170px;
    height: 90px;
    position: relative;
    display: flex;
    overflow: hidden;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
    div {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      text-align: center;
      font-weight: 500;
    }
  `,

  SeeMore: styled.div`
    border: 2px solid #e2e2e2;
    border-radius: 5px;
    cursor: pointer;
    width: 170px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  `
};
