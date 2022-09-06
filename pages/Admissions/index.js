import React from "react";
import Banner from "../Component/Banner";
import Menu from "../Component/Menu";
import Detail from "./Detail";
import Form from "./Form";
import  StyledAdmission  from "../../components/Admissions/styled";

const Admissions = () => {
  return (
    <>
      <Banner />
      <Menu />
      <StyledAdmission.WrapperAdmisstion>
        <Detail />
        <Form />
      </StyledAdmission.WrapperAdmisstion>
    </>
  );
};

export default Admissions;
