import React from "react";
import styled from "styled-components";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({ totalPages, selectPageIndex, handlePageIndex }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  
  return (
    <PaginationContainer>
      <PageNumbersContainer>
        <div onClick={() => handlePageIndex(selectPageIndex - 1)}>
          <MdKeyboardDoubleArrowLeft />
        </div>
        {pageNumbers?.map((e) => (
          <PageNumber
            key={e}
            isSelected={selectPageIndex === e}
            onClick={() => handlePageIndex(e)}
          >
            {e}
          </PageNumber>
        ))}
        <div onClick={() => handlePageIndex(selectPageIndex + 1)}>
          <MdKeyboardDoubleArrowRight />
        </div>
      </PageNumbersContainer>
      <ButtonsContainer>
        <div>
          <FaLongArrowAltLeft />
          <span>Older</span>
        </div>
        <div>
          <span>Newer</span>
          <FaLongArrowAltRight />
        </div>
      </ButtonsContainer>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
`;

const PageNumbersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    border: 2px solid #dadada;
    border-left: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 0;
    font-size: 22px;
    cursor: pointer;
    user-select: none;
  }
  > div:first-child {
    border-left: 2px solid #dadada;
    border-radius: 5px 0 0 5px;
    color: #800080;
  }
  > div:last-child {
    border-radius: 0 5px 5px 0;
    color: #800080;
  }
  > div:hover {
    color: #ffffff;
    background-color: #800080;
    border-color: #884b88;
  }
`;
const PageNumber = styled.div`
  color: ${(props) => (props.isSelected ? "#FFFFFF" : "#800080")};
  background-color: ${(props) => (props.isSelected ? "#800080" : "initial")};
  border-color: ${(props) =>
    props.isSelected ? "#884B88 !important" : "initial"};
`;
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    column-gap: 1.4vh;
    font-size: 22px;
    border: 2px solid #bdbdbd;
    border-radius: 50px;
    padding: 12px 24px;
    color: #bdbdbd;
  }
`;
