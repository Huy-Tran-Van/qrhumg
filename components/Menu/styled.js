import styled from "styled-components";

export const MenuPage = {
  Menu: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0c4ca3;
    height: 70px;
    a {
      height: 100%;
    }

    @media (max-width: 579px){
      display: none;
    }
  `,

  ItemMenu: styled.div`
    color: #ffffff;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    padding: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: #0d6efd;
    }
  `,
};
