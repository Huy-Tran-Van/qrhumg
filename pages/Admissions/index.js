import React from "react";
import Banner from "../../components/Banner";
import Menu from "../../components/Menu";
import Detail from "./Detail";
import Form from "./Form";
import  StyledAdmission  from "./styled";

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
