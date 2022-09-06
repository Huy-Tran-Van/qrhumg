import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { LOCALHOST_URL_API } from "../../../ultis";
import  BannerPage  from "../../../components/Banner/styled";

const Banner = () => {

  const [dataBanner, setDataBanner] = useState([])

  useEffect(() => {

    const getBanner = async () => {
      const res = await axios.get(`${LOCALHOST_URL_API}/banner`)
      setDataBanner(res.data.data)
    }
    getBanner()
  }, [])
  return (
    <BannerPage.Banner>
      <Carousel>
        {dataBanner && dataBanner.length > 0 ? dataBanner.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={`${LOCALHOST_URL_API}/${item.url}`}
              alt={item.name}
            />
          </Carousel.Item>
        )) : null}

      </Carousel>
    </BannerPage.Banner>
  );
};

export default Banner;
