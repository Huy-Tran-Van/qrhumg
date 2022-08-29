import styled from "styled-components";

export const StyledNews = {
  WrapperNews: styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 64px;
  `,
  ItemNews: styled.div`
    width: 30%;
    border-radius: 5px;
    overflow: hidden;
    background-color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0px 4px 25px 0px #3707000d;
    &:hover {
      box-shadow: 0px 4px 30px 0px #37070026;
      transition: all 0.3s ease;
      h1 {
        color: #d64f3c;
      }
      img {
        transform: scale(1.2);
        width: 100%;
      }
    }
  `,
  WrapperImages: styled.div`
    width: 100%;
    overflow: hidden;
    height: 256px;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.3s ease;
      transition: 0.4s ease;
      transform-origin: 50% 50%;
    }
  `,
  WrapperContent: styled.div`
    padding: 16px 24px 24px 24px;
  `,
  NameKhoa: styled.span`
    font-size: 16px;
    font-weight: 700;
    color: #d64f3c;
  `,
  TitleNews: styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: #231f20;
    margin-top: 5px;
    transition: all 0.3s ease;
  `,
  WrapperDay: styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
  `,
  TitleDays: styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #606060;
    margin-top: 16px !important;
  `,
  WrapperEye: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      gap: 3px;
    }
  `,
};
