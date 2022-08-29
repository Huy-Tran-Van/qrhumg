import React from "react";
import Banner from "../../components/Banner";
import Menu from "../../components/Menu";
import News from "./News";
import Search from "./Search";
import  WrapeprInfrastructure  from "./styled";

const PageInfastructure = () => {
  return (
    <>
      <Banner />
      <Menu />
      <WrapeprInfrastructure>
        {/* <Search /> */}
        <div style = {{paddingTop: "20px"}}>
          <News />
        </div>

      </WrapeprInfrastructure>
    </>
  );
};

export default PageInfastructure;
