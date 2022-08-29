import styled from "styled-components";

const StyledDetail = {
  WrapperDetail: styled.div``,
  WrapperTitle: styled.div`
    margin-bottom: 64px;
    text-align: center;
  `,
  TitleDetail: styled.span`
    font-size: 48px;
    font-weight: 700;
    color: #0c3050;
    @media (max-width: 579px){
      font-size: 30px;
    }
  `,
  InfoDetal: styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    @media (max-width: 579px){
      flex-direction: column;
    }
  `,
  DetailLeft: styled.div`
  
  `,
  DetailRight: styled.div`
  
  `,
  WrapperItemDetail: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 56px;
    width: 600px;
    @media (max-width: 579px){
      width: 100%;
    }
  `,
  InfoLeft: styled.div`
    padding: 32px;
    margin-bottom: 40px;
    box-shadow: 0px 4px 25px 0px #3707000d;
    ul {
      font-size: 16px;
      color: #597487;
      font-weight: 500;
    }
    @media (max-width: 579px){

    }
  `,
  Detail: styled.div``,
  NameDetail: styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #0c3050;
    margin-bottom: 24px;
  `,
  ItemDetail: styled.div``,
  ContentDetail: styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
  `,
  WrapperIcon: styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2fa4e7;
    svg {
      color: #ffffff;
      font-size: 16px;
    }
  `,
  TitleContent: styled.div`
    span {
      font-size: 16px;
      color: #0c3050;
      font-weight: 700;
    }
    p {
      color: #597487;
      font-size: 16px;
      font-weight: 500;
    }
  `,
  WrapperWelfare: styled.div`
    box-shadow: 0px 4px 25px 0px #3707000d;
  `,
}

export default StyledDetail;
