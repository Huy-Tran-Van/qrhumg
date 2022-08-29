import styled from "styled-components";

const StyledSearch = {
  WrapperSearch: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 64px;
  `,
  WrapperLeft: styled.div`
    display: flex;
    gap: 26px;
  `,
  WrapperInput: styled.div`
    position: relative;
    .icon-search {
      position: absolute;
      height: 100%;
      right: 20px;
    }
  `,
  InputSearch: styled.input`
    width: 315px;
    height: 48px;
    border: 1px solid #aaaaaa;
    border-radius: 5px;
    padding-left: 16px;
    &::placeholder {
      color: #d6d6d6;
      font-size: 16px;
      font-weight: 500;
    }
  `,
  SelectSearch: styled.select`
    width: 220px;
    height: 48px;
    border: 1px solid #aaaaaa;
    border-radius: 5px;
    padding: 16px;
    font-size: 16px;
    color: #d6d6d6;
  `,
  WrapperRight: styled.div`
    display: flex;
    gap: 86px;
    align-items: center;
  `,
  TitleSort: styled.p`
    font-size: 20px;
    font-weight: 700;
    color: #606060;
  `,
};

export default StyledSearch;
