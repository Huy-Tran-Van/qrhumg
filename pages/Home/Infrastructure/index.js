import React, { useEffect, useState } from "react";
import StyledIntrastructure from "../../../components/Home/Infrastructure/styled";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getNew } from "../../../redux/New/action";
import { LOCALHOST_URL_API_STRAPI } from "../../../ultis";
import Link from "next/link";

const Intrastructure = () => {

  const [intrastucture, setIntrastucture] = useState([
    {
      id: 1,
      title: "Sân bãi tập thể dục thể thao",
      image:
        "https://humgqr.000webhostapp.com/wp-content/uploads/2022/01/san-gdtc.jpg",
    },
  ]);

  const dispatch = useDispatch();
  const { dataNew } = useSelector(state => state.newReducer);
  console.log({ dataNew });
  useEffect(() => {
    dispatch(getNew())
  }, [dispatch])
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: dataNew?.length < 3 ? dataNew?.length : 3,
    slidesToScroll: dataNew?.length < 3 ? dataNew?.length : 3,
  };
  return (
    <StyledIntrastructure.WrapperInTrastucture>
      <StyledIntrastructure.Title>Cơ sở vật chất</StyledIntrastructure.Title>
      <StyledIntrastructure.InFoIntrastucture>
        <Slider {...settings}>
          {dataNew && dataNew.length > 0 ? dataNew?.map((item, index) => (
            <div key={item.id}>
              <Link href={`/InfrastructureDetail/${item?.attributes.slug}`} passHref>
                <StyledIntrastructure.Item>
                  <StyledIntrastructure.Images
                    src={`${LOCALHOST_URL_API_STRAPI}${item?.attributes?.image?.data[0].attributes?.url}`}
                    alt={item?.attributes?.image?.data[0].name}
                  />
                  <StyledIntrastructure.TitleNews>
                    {item.attributes.Title}
                  </StyledIntrastructure.TitleNews>
                </StyledIntrastructure.Item>
              </Link>
            </div>
          )) : null}
          {/* 
          <div>
            <StyledIntrastructure.Item>
              <StyledIntrastructure.Images
                src="https://humgqr.000webhostapp.com/wp-content/uploads/2022/01/san-gdtc.jpg"
                alt=""
              />
              <StyledIntrastructure.TitleNews>
                Sân thể dục
              </StyledIntrastructure.TitleNews>
            </StyledIntrastructure.Item>
          </div>
          <div>
            <StyledIntrastructure.Item>
              <StyledIntrastructure.Images
                src="https://humgqr.000webhostapp.com/wp-content/uploads/2022/01/san-gdtc.jpg"
                alt=""
              />
              <StyledIntrastructure.TitleNews>
                Sân thể dục
              </StyledIntrastructure.TitleNews>
            </StyledIntrastructure.Item>
          </div>
          <div>
            <StyledIntrastructure.Item>
              <StyledIntrastructure.Images
                src="https://humgqr.000webhostapp.com/wp-content/uploads/2022/01/san-gdtc.jpg"
                alt=""
              />
              <StyledIntrastructure.TitleNews>
                Sân thể dục
              </StyledIntrastructure.TitleNews>
            </StyledIntrastructure.Item>
          </div> */}
        </Slider>
      </StyledIntrastructure.InFoIntrastucture>
    </StyledIntrastructure.WrapperInTrastucture>
  );
};

export default Intrastructure;
