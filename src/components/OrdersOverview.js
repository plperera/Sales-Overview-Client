import React, { useState } from "react";
import styled from "styled-components";
import StyledTable from "./StyledTable";
import StyledSelect from "../common/StyledSelect";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const OrdersOverview = () => {
  const pagesNumber = [1,2,3,4,5,6,7,8,9]

  const [selectedSeller, setSelectedSeller] = useState("All sellers")
  const [selectedCountry, setSelectedCountry] = useState("All sellers")
  const [selectPageIndex, setSelectPageIndex] = useState(1)

  const handlePageIndex = (index) => {
    if (index >= pagesNumber.length + 1 || index <= 0){
      return
    }
    setSelectPageIndex(index);
  };

  const handleSeller = (event) => {
    setSelectedSeller(event.target.value);
  };

  const handleCountry = (event) => {
    setSelectedCountry(event.target.value);
  };

  const sellers = [
    {id: 1, name: "Seller #1"},
    {id: 2, name: "Seller #2"},
    {id: 3, name: "Seller #3"},
    {id: 4, name: "Seller #4"},
  ]

  const Countries = [
    {id: 1, name: "BRA"},
    {id: 2, name: "ARG"},
    {id: 3, name: "MEX"}
  ]

  return (
    <Container>
      <FiltersContainer>
        <StyledSelect 
          handle={handleSeller}
          selected={selectedSeller}
          options={sellers}
          allOptionsText={"All Sellers"}
        />
        <StyledSelect 
          handle={handleCountry}
          selected={selectedCountry}
          options={Countries}
          allOptionsText={"All Contries"}
        />
      </FiltersContainer>

      <StyledTable/>

      <PaginationContainer>
        <PageNumbersContainer >
          <div onClick={() => handlePageIndex(selectPageIndex - 1)}><MdKeyboardDoubleArrowLeft/></div>
          {pagesNumber?.map( e => 
            <PageNumber 
              isSelected={selectPageIndex === e} 
              key={e} 
              onClick={() => handlePageIndex(e)}
            >
              {e}
            </PageNumber>
          )}
          <div onClick={() => handlePageIndex(selectPageIndex + 1)}><MdKeyboardDoubleArrowRight/></div>
          </PageNumbersContainer>
        <ButtonsContainer>
          <div>
            <FaLongArrowAltLeft/>
            <span>Older</span>
          </div>
          <div>
            <span>Newer</span>
            <FaLongArrowAltRight/>
          </div>
        </ButtonsContainer>
      </PaginationContainer>
    </Container>
  );
};

export default OrdersOverview;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  row-gap: 2vh;
`;
const FiltersContainer = styled.div`
  display: flex;
  column-gap: 1vw;
`
const PaginationContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
`

const PageNumbersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    border: 2px solid #DADADA;
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
    border-left: 2px solid #DADADA;
    border-radius: 5px 0 0 5px;
    color: #800080;
  }
  > div:last-child {
    border-radius: 0 5px 5px 0;
    color: #800080;
  }
  > div:hover {
    color: #FFFFFF;
    background-color: #800080;
    border-color: #884B88;
  }
`
const PageNumber = styled.div`
  color: ${props => props.isSelected ? ("#FFFFFF"):("#800080")};
  background-color: ${props => props.isSelected ? ("#800080"):("initial")};
  border-color: ${props => props.isSelected ? ("#884B88 !important"):("initial")};
`
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    column-gap: 1.4vh;
    font-size: 22px;
    border: 2px solid #BDBDBD;
    border-radius: 50px;
    padding: 12px 24px; 
    color: #BDBDBD;
  }
`
