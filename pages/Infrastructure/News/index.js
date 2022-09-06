import React, { useEffect, useState } from "react";
import StyledNews from "../../../components/Infrastructure/News/styled";
import {
  AiOutlineCalendar,
  AiOutlineEye,
  AiOutlineHeart,
} from "react-icons/ai";
import Paging from "../../../components/Paging";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getNew } from "../../../redux/New/action";
import { LOCALHOST_URL_API_STRAPI } from "../../../ultis";
import moment from "moment";

const News = () => {
  const [news, SetNews] = useState([
    {
      id: 1,
      images: "",
      khoa: "Công nghệ thông tin",
      title: "Hội thương binh liệt sĩ tặng tưởng cho trường",
      day: "29/3/2022",
      like: "33",
      count: "33",
    },
    {
      id: 2,
      images: "",
      khoa: "Công nghệ thông tin",
      title: "Hội thương binh liệt sĩ tặng tưởng cho trường",
      day: "29/3/2022",
      like: "33",
      count: "33",
    },
    {
      id: 1,
      images: "",
      khoa: "Công nghệ thông tin",
      title: "Hội thương binh liệt sĩ tặng tưởng cho trường",
      day: "29/3/2022",
      like: "33",
      count: "33",
    },
    {
      id: 1,
      images: "",
      khoa: "Công nghệ thông tin",
      title: "Hội thương binh liệt sĩ tặng tưởng cho trường",
      day: "29/3/2022",
      like: "33",
      count: "33",
    },
    {
      id: 1,
      images: "",
      khoa: "Công nghệ thông tin",
      title: "Hội thương binh liệt sĩ tặng tưởng cho trường",
      day: "29/3/2022",
      like: "33",
      count: "33",
    },
    {
      id: 1,
      images: "",
      khoa: "Công nghệ thông tin",
      title: "Hội thương binh liệt sĩ tặng tưởng cho trường",
      day: "29/3/2022",
      like: "33",
      count: "33",
    },
    {
      id: 1,
      images: "",
      khoa: "Công nghệ thông tin",
      title: "Hội thương binh liệt sĩ tặng tưởng cho trường",
      day: "29/3/2022",
      like: "33",
      count: "33",
    },
    {
      id: 1,
      images: "",
      khoa: "Công nghệ thông tin",
      title: "Hội thương binh liệt sĩ tặng tưởng cho trường",
      day: "29/3/2022",
      like: "33",
      count: "33",
    },
    {
      id: 1,
      images: "",
      khoa: "Công nghệ thông tin",
      title: "Hội thương binh liệt sĩ tặng tưởng cho trường",
      day: "29/3/2022",
      like: "33",
      count: "33",
    },
  ]);

  const { dataNew } = useSelector(state => state.newReducer)
  console.log("dataNew", dataNew);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNew())
  }, [])
  return (
    <>
      <StyledNews.WrapperNews>
        {dataNew && dataNew.length > 0 ? dataNew.map((item, index) => <StyledNews.ItemNews key={index}>
          <StyledNews.WrapperImages>
            <img src={`${LOCALHOST_URL_API_STRAPI}${item?.attributes?.image?.data[0].attributes?.url}`} />
          </StyledNews.WrapperImages>
          <StyledNews.WrapperContent>
            {/* <Link
              href={`/InfrastructureDetail/${item?.attributes?.slug}`}
              passHref
            >
              <StyledNews.NameKhoa>111</StyledNews.NameKhoa>
            </Link> */}
            {item?.attributes?.slug}
            <Link href={`/InfrastructureDetail/detail/${item?.attributes?.slug}`}
              passHref>
              <a>
                <StyledNews.TitleNews>{item.attributes?.Title}</StyledNews.TitleNews>

              </a>
            </Link>
            <StyledNews.WrapperDay>
              <AiOutlineCalendar fontSize={20} />
              <div>
                <StyledNews.TitleDays>
                  Ngày đăng bài: {moment(item.attributes?.createdAt).format("DD-MM-YYYY")}
                </StyledNews.TitleDays>
              </div>
            </StyledNews.WrapperDay>
            <StyledNews.WrapperEye>
              <div>
                <AiOutlineEye fontSize={20} /> {item.attributes?.like}
              </div>

              <div>
                <AiOutlineHeart fontSize={20} /> {item.attributes?.share}
              </div>
            </StyledNews.WrapperEye>
          </StyledNews.WrapperContent>
        </StyledNews.ItemNews>) : news.map((item, index) => (
          <StyledNews.ItemNews key={index}>
            <StyledNews.WrapperImages>
              <img src="https://znews-photo.zadn.vn/w660/Uploaded/mdf_eioxrd/2021_07_12/2.jpg" />
            </StyledNews.WrapperImages>
            <StyledNews.WrapperContent>
              <Link
                href={`/InfrastructureDetail/${1}`}
                passHref
              >
                <StyledNews.NameKhoa>{item.khoa}</StyledNews.NameKhoa>
              </Link>
              <StyledNews.TitleNews>{item.title}</StyledNews.TitleNews>
              <StyledNews.WrapperDay>
                <AiOutlineCalendar fontSize={20} />
                <div>
                  <StyledNews.TitleDays>
                    Ngày đăng bài: {item.day}
                  </StyledNews.TitleDays>
                </div>
              </StyledNews.WrapperDay>
              <StyledNews.WrapperEye>
                <div>
                  <AiOutlineEye fontSize={20} /> {item.count}
                </div>

                <div>
                  <AiOutlineHeart fontSize={20} /> {item.like}
                </div>
              </StyledNews.WrapperEye>
            </StyledNews.WrapperContent>
          </StyledNews.ItemNews>
        ))}
      </StyledNews.WrapperNews>
      <Paging />
    </>
  );
};

export default News;
