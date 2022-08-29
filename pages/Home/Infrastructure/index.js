import Image from "next/image";
import React, { useState } from "react";
import { StyledIntrastructure } from "./styled";
import Slider from "react-slick";

const Intrastructure = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const [intrastucture, setIntrastucture] = useState([
    {
      id: 1,
      title: "Sân bãi tập thể dục thể thao",
      image:
        "https://humgqr.000webhostapp.com/wp-content/uploads/2022/01/san-gdtc.jpg",
    },
  ]);
  return (
    <StyledIntrastructure.WrapperInTrastucture>
      <StyledIntrastructure.Title>Cơ sở vật chất</StyledIntrastructure.Title>
      <StyledIntrastructure.InFoIntrastucture>
        <Slider {...settings}>
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
        </Slider>
      </StyledIntrastructure.InFoIntrastucture>
    </StyledIntrastructure.WrapperInTrastucture>
  );
};

export default Intrastructure;
