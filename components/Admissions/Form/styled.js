import styled from "styled-components";

const StyledForm = {
  WrapperForm: styled.div`
    /* padding: 0 555px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  TitleForm: styled.div`
    font-size: 48px;
    font-weight: 700;
    color: #0c3050;
    text-align: center;
    margin-bottom: 64px;
    @media (max-width: 579px){
      font-size: 30px;
    }
  `,
  BodyForm: styled.div`
    box-shadow: 0px 4px 25px 0px #2900001a;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    .primary{
      margin: 0 auto;
    }
    @media (max-width: 579px){
      width: 100%;
    }
  `,
  ContentForm: styled.div`
    padding: 36px 36px 40px 36px;
    @media (max-width: 579px){
    input {
      width: 100%;
    }
    select{
      width: 100%;
    }
    }
  `,
  WrapperInput: styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
    justify-content: space-between;
    @media (max-width: 579px){
      flex-direction: column;
    }
  `,
  InputName: styled.input`
    width: 354px;
    height: 56px;
    border-radius: 10px;
    border: 1px solid #aaaaaa;
    padding: 20px 0px 16px 16px;
    &::placeholder {
      font-size: 16px;
      font-weight: 500px;
      color: #d6d6d6;
    }
  `,
  InputEmail: styled.input`
    width: 368px;
    height: 56px;
    border-radius: 10px;
    border: 1px solid #aaaaaa;
    padding: 20px 0px 16px 16px;
    &::placeholder {
      font-size: 16px;
      font-weight: 500px;
      color: #d6d6d6;
    }
  `,
  Select: styled.select`
    width: 317px;
    // height: 56px;
    border-radius: 10px;
    border: 1px solid #aaaaaa;
    padding: 20px 0px 16px 16px;
    font-size: 16px;
    font-weight: 500px;
  `,
  SelectDepartment: styled.select`
    width: 405px;
    // height: 56px;
    border-radius: 10px;
    border: 1px solid #aaaaaa;
    padding: 20px 0px 16px 16px;
    font-size: 16px;
    font-weight: 500px;
  `,

  AdmissionForm: styled.select`
    width: 100%;
    // height: 56px;
    border-radius: 10px;
    border: 1px solid #aaaaaa;
    padding: 20px 0px 16px 16px;
    font-size: 16px;
    font-weight: 500px;
  `,
  InputPoint: styled.input`
    width: 15%;
    // height: 56px;
    border-radius: 10px;
    border: 1px solid #aaaaaa;
    padding: 20px 0px 16px 16px;
    font-size: 16px;
    font-weight: 500;
  `,
  WrapperInputPoint: styled.div`
    display: flex;
    gap: 16px;
  `,
  TextArea: styled.textarea`
    width: 100%;
    height: 300px;
    border-radius: 10px;
    border: 1px solid #aaaaaa;
    padding: 20px 0px 16px 16px;
  `,
};

export default StyledForm;
