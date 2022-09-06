import React from "react";
import StyledInfoDetail from "../../components/InfrastructureDetail/InfoDetail/styled";
import { BsHeart } from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import Share from "../Component/Share";

const InfoLeft = ({ dataNew }) => {
  return (
    <>
      <StyledInfoDetail.InfoLeft>
        <h1>{dataNew?.attributes?.Title}</h1>
        <ReactMarkdown>{dataNew?.attributes?.content}</ReactMarkdown>
        <Share dataNew={dataNew}/>
      </StyledInfoDetail.InfoLeft>
    </>

  );
};
const InfoRight = () => {
  return (
    <StyledInfoDetail.InfoRight>
      bài viết liên quan
    </StyledInfoDetail.InfoRight>
  );
};

const InfoDetail = ({ dataNew }) => {
  return (
    <StyledInfoDetail.WrapperInfoDetal>
      <InfoLeft dataNew={dataNew} />
      <InfoRight />
    </StyledInfoDetail.WrapperInfoDetal>
  );
};

export default InfoDetail;
