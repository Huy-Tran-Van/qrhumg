import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataMenu } from "../../redux/Menu/action";
import { MenuPage } from "./styled";
import Link from "next/link";

const Menu = () => {
  const [menu, setMenu] = useState([
    {
      id: 1,
      title: "trang chủ",
      link : "/Infrastructure"
    },
    {
      id: 2,
      title: "giới thiệu",
      link : "/Infrastructure"

    },
    {
      id: 3,
      title: "tuyển sinh",
      link : "/Admissions"

    },
    {
      id: 4,
      title: "cơ sở vật chất",
      link : "/Infrastructure"

    },
    {
      id: 5,
      title: "đào tạo-đbclgd",
      link : "/Infrastructure"

    },
    {
      id: 6,
      title: "khoa học-công nghệ",
      link : "/Infrastructure"

    },
    {
      id: 7,
      title: "hợp tác-đối ngoại",
      link : "/Infrastructure"

    },
    {
      id: 8,
      title: "sinh viên",
      link : "/Infrastructure"

    },
    {
      id: 9,
      title: "hội đồng gd cơ sở",
      link : "/Infrastructure"

    },
  ]);
  const { dataMenu } = useSelector((state) => state.menuReducer);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataMenu());
  }, [dispatch]);
  return (
    <MenuPage.Menu>
      {dataMenu && dataMenu.length > 0
        ? dataMenu?.map((item, index) => (
            <Link href="/Infrastructure" as="/co-so-vat-chat" key={index}>
              <a>
                <MenuPage.ItemMenu>{item.attributes.title}</MenuPage.ItemMenu>{" "}
              </a>
            </Link>
          ))
        : menu?.map((item, index) => (
            <Link href={`/${item.link}`} key={index}>
              <a>
                <MenuPage.ItemMenu key={index}>{item.title}</MenuPage.ItemMenu>
              </a>
            </Link>
          ))}
    </MenuPage.Menu>
  );
};

export default Menu;
