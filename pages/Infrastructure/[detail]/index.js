import React from "react";
import Banner from "../../Component/Banner";
import Menu from "../../Component/Menu";
import InfoDetail from "../../InfrastructureDetail/InfoDetail";
import axios from "axios"
import { LOCALHOST_URL_API_STRAPI, URL_SERVER_WEB } from "../../../ultis";
import SEO from "../../SEO/seo";
import { useRouter } from 'next/router'
import StyledInfratructureDetail from "../../../components/InfrastructureDetail/styled";

const Detail = ({ dataNew }) => {
  return (
    <>
      <Banner />
      <Menu />
      {dataNew ? <><SEO
        title={dataNew?.attributes?.Title}
        urlKey={`${URL_SERVER_WEB}/InfrastructureDetail/${dataNew?.attributes?.slug}`}
        image={`${LOCALHOST_URL_API_STRAPI}/${dataNew?.attributes?.image?.data[0].attributes?.url}`}
        content={dataNew?.attributes?.Content ?? 'humgqr'}
      // keyword={data?.keyword ?? ''}
      />

        <StyledInfratructureDetail.WrapperDetail>
          <InfoDetail dataNew={dataNew} />
        </StyledInfratructureDetail.WrapperDetail>
        {/* <div>huy</div> */}</> : null}

    </>
  );
};

export default Detail;

// export async function getStaticPaths() {

//   // const res = await axios.get(`${LOCALHOST_URL_API_STRAPI}/api/news?populate=*&filters[slug]=su-hinh-thanh-cua-kim-cuong`)
//   return {
//     // props : {}
//     paths: ['/Infrastructure/su-hinh-thanh-cua-kim-cuong-1'],
//     fallback: true,
//   };
// }


export async function getServerSideProps(context) {
  console.log("context", context);
  const params = context.params.detail;
  const res = await axios.get(`${LOCALHOST_URL_API_STRAPI}/api/news?populate=*&filters[slug]=${params}`)
  if (res) {
    return {
      // props : {}
      props: { dataNew: res.data.data[0] }, // will be passed to the page component as props
    };
  } else {
    return {
      props: {}
      // props: { dataNew: res.data.data[0] }, // will be passed to the page component as props
    };
  }

}
