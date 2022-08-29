import styled from "styled-components";

const StyledInfoDetail = {
  WrapperInfoDetal: styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 50px 175px 0px 175px;
  `,
  InfoLeft: styled.div`
    width: 70%;
    background-color: #ffffff;
    padding: 10px;
    img{
      width: 100%;
    }
  `,
  InfoRight: styled.div`
    width: 30%;
    background-color: #ffffff;
    padding: 20px;
  `,
  WrapperImages: styled.div`
    display: flex;
    img {
      padding: 20px;
      width: 100%;
    }
  `,
  ItemImages: styled.div`
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    img {
      width: 100px;
      height: 100px;
    }
  `,
  TitleNews: styled.h1`
    font-size: 24px;
  `,
  WrapperInfoPost: styled.div`
    p {
      font-size: 14px;
      color: rgb(102, 102, 102);
    }
  `,
  TitlePost: styled.p`
    font-size: 17px;
  `,
  TimePost: styled.p``,
  CountSee: styled.p``,
  CountLike: styled.p``,
  CountShare: styled.p``,
  WrapperClick: styled.div``,
  Share: styled.div`
    width: 90px;
  `,
};

export default StyledInfoDetail;
