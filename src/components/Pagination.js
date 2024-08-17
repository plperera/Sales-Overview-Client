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
        {/* Botão para ir à primeira página */}
        <ArrowButton
          onClick={() => handlePageIndex(1)}
          disabled={selectPageIndex === 1}
        >
          <MdKeyboardDoubleArrowLeft />
        </ArrowButton>
        
        {/* Números das páginas */}
        {pageNumbers?.map((e) => (
          <PageNumber
            key={e}
            isSelected={selectPageIndex === e}
            onClick={() => handlePageIndex(e)}
          >
            {e}
          </PageNumber>
        ))}
        
        {/* Botão para ir à última página */}
        <ArrowButton
          onClick={() => handlePageIndex(totalPages)}
          disabled={selectPageIndex === totalPages}
        >
          <MdKeyboardDoubleArrowRight />
        </ArrowButton>
      </PageNumbersContainer>

      <ButtonsContainer>
        {/* Botão para ir à página anterior */}
        <StyledButton
          onClick={() => handlePageIndex(selectPageIndex - 1)}
          disabled={selectPageIndex === 1}
        >
          <FaLongArrowAltLeft />
          <span>Older</span>
        </StyledButton>

        {/* Botão para ir à próxima página */}
        <StyledButton
          onClick={() => handlePageIndex(selectPageIndex + 1)}
          disabled={selectPageIndex === totalPages}
        >
          <span>Newer</span>
          <FaLongArrowAltRight />
        </StyledButton>
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

const ArrowButton = styled.div`
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
  color: ${(props) => (props.disabled ? "#DADADA !important" : "initial")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  background-color: ${(props) => (props.disabled ? "#F5F5F5" : "initial")};
`;

const PageNumber = styled.div`
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
  color: ${(props) => (props.isSelected ? "#FFFFFF" : "#800080")};
  background-color: ${(props) => (props.isSelected ? "#800080" : "initial")};
  border-color: ${(props) => (props.isSelected ? "#884B88" : "#dadada")};
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled.div`
  display: flex;
  column-gap: 1.4vh;
  font-size: 22px;
  border: 2px solid #bdbdbd;
  border-radius: 50px;
  padding: 12px 24px;
  color: ${(props) => (props.disabled ? "#DADADA" : "#BDBDBD")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  background-color: ${(props) => (props.disabled ? "#F5F5F5" : "initial")};
`;
