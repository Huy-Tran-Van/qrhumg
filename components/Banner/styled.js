import styled from "styled-components";

 const BannerPage = {
  Banner: styled.div`
    width: 100%;
    height: 400px;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    .carousel{
      height: 100% !important;
    }
    .carousel-inner{
      height: 100% !important;
    }
    .carousel-item{

    height:  100% !important;
    }
    img{
      height: 100% !important;
    }
    span {
      width: 100% !important ;
    }
  `,
};
export default BannerPage;
