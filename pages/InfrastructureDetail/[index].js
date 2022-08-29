import React from "react";
import Banner from "../../components/Banner";
import Menu from "../../components/Menu";
import InfoDetail from "./InfoDetail";
import axios from "axios"
import { LOCALHOST_URL_API_STRAPI } from "../../ultis";
import SEO from "../SEO/seo";
import { useRouter } from 'next/router'
import StyledInfratructureDetail from "../../components/InfrastructureDetail/styled";

const Detail = ({ dataNew }) => {
  // const router = useRouter()
  // console.log("router", router);
  // if (typeof window !== 'undefined') {
  //   var hostname = window.location.host;
  //   console.log("hostname", hostname);
  // }
  return (
    <>
      {/* <SEO
        title={dataNew?.attributes?.Title}
        urlKey={`${hostname}/InfrastructureDetail/${dataNew?.attributes?.slug}`}
        // image={`http://localhost:1337/${dataNew?.attributes?.image?.data[0].attributes?.url}`}
        content={dataNew.attributes.Content ?? 'Drivadz'}
      // keyword={data?.keyword ?? 'Drivadz'}
      />
      <Banner />
      <Menu />
      <StyledInfratructureDetail.WrapperDetail>
        <InfoDetail dataNew={dataNew} />
      </StyledInfratructureDetail.WrapperDetail> */}
      <div>huy</div>
    </>
  );
};

export default Detail;

export async function getStaticProps(context) {
  const params = context.query.index;
  const res = await axios.get(`${LOCALHOST_URL_API_STRAPI}/api/news?populate=*&filters[slug]=${params}`)
  console.log("dataNew", res.data.data);
  return {
    props: { dataNew: res.data.data[0] }, // will be passed to the page component as props
  };
}
