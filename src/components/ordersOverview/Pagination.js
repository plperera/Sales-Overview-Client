import React from "react";
import styled from "styled-components";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const Pagination = ({ totalPages, selectPageIndex, handlePageIndex }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <ButtonsContainer>
        <StyledButton
          onClick={() => handlePageIndex(selectPageIndex - 1)}
          disabled={selectPageIndex === 1}
        >
          <FaLongArrowAltLeft />
          <span>Older</span>
        </StyledButton>

        <StyledButton
          onClick={() => handlePageIndex(selectPageIndex + 1)}
          disabled={selectPageIndex === totalPages}
        >
          <span>Newer</span>
          <FaLongArrowAltRight />
        </StyledButton>
      </ButtonsContainer>

      <PageNumbersContainer>
        <ArrowButton
          onClick={() => handlePageIndex(1)}
          disabled={selectPageIndex === 1}
        >
          <MdKeyboardDoubleArrowLeft />
        </ArrowButton>
        
        {pageNumbers?.map((e) => (
          <PageNumber
            key={e}
            isSelected={selectPageIndex === e}
            onClick={() => handlePageIndex(e)}
          >
            {e}
          </PageNumber>
        ))}
        
        <ArrowButton
          onClick={() => handlePageIndex(totalPages)}
          disabled={selectPageIndex === totalPages}
        >
          <MdKeyboardDoubleArrowRight />
        </ArrowButton>
      </PageNumbersContainer>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PageNumbersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 33%;
  > *:first-child {
    border-radius: 10px 0 0 10px;
  }
  > *:last-child {
    border-radius: 0 10px 10px 0;
  }
`;

const ArrowButton = styled.div`
  border: 2px solid #F0F0F0;
  border-left: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  color: ${(props) => (props.disabled ? "#C0C0C0 !important" : "#7132D6")};
  opacity: ${(props) => (props.disabled ? "0.9" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  background-color: ${(props) => (props.disabled ? "#F5F5F5" : "#FFFFFF")};
  &:hover {
    color: ${(props) => (props.disabled ? "#C0C0C0 !important" : "#FFFFFF")};
    background-color: ${(props) => (props.disabled ? "#F5F5F5" : "#7132D6")};
  }
`;

const PageNumber = styled.div`
  border: 2px solid #F0F0F0;
  border-left: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  color: ${(props) => (props.isSelected ? "#FFFFFF" : "#7132D6")};
  background-color: ${(props) => (props.isSelected ? "#7132D6" : "#FFFFFF")};
  border-color: ${(props) => (props.isSelected ? "#7132D6" : "#F0F0F0")};
  &:hover {
    color: ${(props) => (props.isSelected ? "#FFFFFF" : "#FFFFFF")};
    background-color: ${(props) => (props.isSelected ? "#7132D6" : "#9452FF")};
    border-color: ${(props) => (props.isSelected ? "#7132D6" : "#9452FF")};
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1vw;
`;

const StyledButton = styled.div`
  display: flex;
  column-gap: 1.4vh;
  font-size: 22px;
  border: 2px solid #7132D6;
  border-radius: 50px;
  padding: 12px 24px;
  border-color: ${(props) => (props.disabled ? "#F0F0F0" : "#7132D6")};
  color: ${(props) => (props.disabled ? "#C0C0C0" : "#7132D6")};
  opacity: ${(props) => (props.disabled ? "0.9" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "pointer")};
  cursor: ${(props) => (props.disabled ? "none" : "pointer")};
  background-color: ${(props) => (props.disabled ? "#F5F5F5" : "#FFFFFF")};
  user-select: none;
  &:hover {
    color: #FFFFFF;
    background-color: #9452FF;
    border-color: #9452FF;
  }
`;
