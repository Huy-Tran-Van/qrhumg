import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllVideo } from "../../../redux/Video/action";
import StyledVideo from "../../../components/Home/Video/styled";

const Video = () => {
  const video = [
    {
      id: 1,
      video: "https://www.youtube.com/watch?v=SlzFEsJbLAA",
    },
    {
      id: 2,
      video: "https://www.youtube.com/watch?v=SlzFEsJbLAA",
    },
    {
      id: 3,
      video: "https://www.youtube.com/watch?v=SlzFEsJbLAA",
    },
  ];

  const { dataVideo } = useSelector(state => state.videoReducer)
  console.log("dataVideo", dataVideo);

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getAllVideo({
      page: 1,
      limit: 3
    }))
  }, [dispatch])

  return <StyledVideo.WrapperVideo>
    {dataVideo && dataVideo.length > 0 ? dataVideo.map((item, index) => (
      <ReactPlayer url={item.video} key={index}></ReactPlayer>
    )) : video.map((item, index) => (
      <ReactPlayer url={item.video} key={index}></ReactPlayer>
    ))}

  </StyledVideo.WrapperVideo>;
};

export default Video;
