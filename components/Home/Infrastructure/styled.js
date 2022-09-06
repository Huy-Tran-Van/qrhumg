import styled from "styled-components";

const StyledIntrastructure = {
  WrapperInTrastucture: styled.div`
    padding: 0 135px;
    text-align: center;
    margin-bottom: 30px;
  `,
  Title: styled.span`
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 30px;
  `,
  InFoIntrastucture: styled.div`
    display: flex;
    margin-top: 30px;
    .slick-initialized {
      width: 100%;
    }
    .slick-prev {
      background: #0c4ca3 !important;
      border-radius: 50% !important;
    }
    .slick-next {
      background: #0c4ca3 !important;
      border-radius: 50% !important ;
    }
  `,
  Item: styled.div`
    width: 370px;
    height: 240px;
    position: relative;
    overflow: hidden;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      img {
        transform: scale(1.2);
        opacity: 0.7;
        width: 100%;
        border-radius: 3px;
        opacity: 0.6;
      }
      h2 {
        display: flex;
      }
    }
  `,
  Images: styled.img`
    width: 100%;
    height: 100%;
    transition: 0.4s ease;
    transform-origin: 50% 50%;
    border-radius: 3px;
  `,
  TitleNews: styled.h2`
    color: #343a40 ;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    align-items: center;
    justify-content: center;
    display: none;
  `,
};
export default StyledIntrastructure;
