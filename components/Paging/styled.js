import styled from "styled-components";

const StyledPaging = {
  WrapperPaing: styled.div`
    display: flex;
    justify-content: end;
    gap: 10px;
  `,
  PageFirst: styled.button`
    background: ${props => props.page === 1 ? "#e2e2e2" : "#ffffff"};
    border: 1px solid #dee2e6;
    padding: 0.5rem 0.75rem;
    color: #5e6c84;
    font-size: 12px;
    cursor: ${props => props.page === 1 ? "no-drop !important" : "pointer"};
  `,
  NextPage: styled.button`
  background: ${props => props.page === props.maxPage ? "#e2e2e2" : "#ffffff"};
  border: 1px solid #dee2e6;
  padding: 0.5rem 0.75rem;
  color: #5e6c84;
  font-size: 12px;
  cursor: ${props => props.page === props.maxPage ? "no-drop !important" : "pointer"};
`,
  BackPage: styled.button`
    background: ${props => props.page === 1 ? "#e2e2e2" : "#ffffff"};
    border: 1px solid #dee2e6;
    padding: 0.5rem 0.75rem;
    color: #5e6c84;
    font-size: 12px;
    cursor: ${props => props.page === 1 ? "no-drop !important" : "pointer"};
  `,
  LastPage: styled.button`
  background: ${props => props.page === props.maxPage ? "#e2e2e2" : "#ffffff"};
  border: 1px solid #dee2e6;
  padding: 0.5rem 0.75rem;
  color: #5e6c84;
  font-size: 12px;
  cursor: ${props => props.page === props.maxPage ? "no-drop !important" : "pointer"};
`,
  Result: styled.button`
    border: none;
    background: none;
    padding: 0.5rem 0.75rem;
    color: #5e6c84;
    font-size: 12px;
  `,
};

export default StyledPaging;
