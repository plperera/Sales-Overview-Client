import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StyledTable from "./StyledTable";
import StyledSelect from "../common/StyledSelect";
import api from "../services/api";
import Pagination from "./Pagination";

const OrdersOverview = () => {
  const [selectedSeller, setSelectedSeller] = useState("All sellers");
  const [selectedCountry, setSelectedCountry] = useState("All sellers");
  const [selectPageIndex, setSelectPageIndex] = useState(1);
  const [paginationData, setPaginationData] = useState(undefined);

  useEffect(() => {
    console.log(selectPageIndex);
  }, [selectPageIndex]);

  useEffect(() => {
    GetOrders(selectPageIndex);
  }, [selectPageIndex]);

  async function GetOrders(page) {
    try {
      const response = await api.GetOrdersWithPagination(page);
      setPaginationData(response?.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSeller = (event) => {
    setSelectedSeller(event.target.value);
  };

  const handleCountry = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handlePageIndex = (index) => {
    if (
      !paginationData ||
      !paginationData.lastPage ||
      index > paginationData.lastPage ||
      index < 1
    ) {
      return;
    }

    setSelectPageIndex(index);
  };

  const sellers = [
    { id: 1, name: "Seller #1" },
    { id: 2, name: "Seller #2" },
    { id: 3, name: "Seller #3" },
    { id: 4, name: "Seller #4" },
  ];

  const Countries = [
    { id: 1, name: "BRA" },
    { id: 2, name: "ARG" },
    { id: 3, name: "MEX" },
  ];

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
      <StyledTable ordersData={paginationData?.ordersData} />
      <Pagination
        totalPages={paginationData?.lastPage}
        selectPageIndex={selectPageIndex}
        handlePageIndex={handlePageIndex}
      />
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
`;
