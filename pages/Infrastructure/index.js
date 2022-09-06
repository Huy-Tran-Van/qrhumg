import React from "react";
import Banner from "../Component/Banner";
import Menu from "../Component/Menu";
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
