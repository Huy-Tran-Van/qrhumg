import React from "react";
import { StyledSearch } from "./styled";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <StyledSearch.WrapperSearch>
      <StyledSearch.WrapperLeft>
        <StyledSearch.WrapperInput>
          <StyledSearch.InputSearch
            type="text"
            placeholder="Tìm kiếm bài viết"
          />
          <BiSearch className="icon-search" />
        </StyledSearch.WrapperInput>
        <div>
          <StyledSearch.SelectSearch>
            <option>Khoa</option>
          </StyledSearch.SelectSearch>
        </div>
      </StyledSearch.WrapperLeft>
      <StyledSearch.WrapperRight>
        <StyledSearch.TitleSort>Sắp xếp theo</StyledSearch.TitleSort>
        <p>Mới nhất</p>
      </StyledSearch.WrapperRight>
    </StyledSearch.WrapperSearch>
  );
};

export default Search;
