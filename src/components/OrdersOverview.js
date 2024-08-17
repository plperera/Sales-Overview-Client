import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StyledTable from "./StyledTable";
import StyledSelect from "../common/StyledSelect";
import api from "../services/api";
import Pagination from "./Pagination";

const OrdersOverview = () => {
  const [selectedSeller, setSelectedSeller] = useState(undefined);
  const [selectedCountry, setSelectedCountry] = useState(undefined);
  const [selectPageIndex, setSelectPageIndex] = useState(1);
  const [paginationData, setPaginationData] = useState(undefined);

  useEffect(() => {
    GetOrders(selectPageIndex, selectedSeller, selectedCountry);
  }, [selectPageIndex, selectedSeller, selectedCountry]);

  async function GetOrders(page, sellerId, country) {
    try {
      const response = await api.GetOrdersWithPagination({
        page,
        sellerId,
        country,
      });
      setPaginationData(response?.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSeller = (event) => {
    setSelectedSeller(event.target.value);
    setSelectPageIndex(1);
  };

  const handleCountry = (event) => {
    setSelectedCountry(event.target.value);
    setSelectPageIndex(1);
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
    { id: '', name: "All Sellers" },
    { id: 1, name: "Seller #1" },
    { id: 2, name: "Seller #2" },
    { id: 3, name: "Seller #3" },
    { id: 4, name: "Seller #4" },
  ];

  const countries = [
    { id: '', name: "All Countries" },
    { id: "BRA", name: "BRA" },
    { id: "ARG", name: "ARG" },
    { id: "MEX", name: "MEX" },
  ];

  return (
    <Container>
      <FiltersContainer>
        <StyledSelect
          handle={handleSeller}
          selected={selectedSeller}
          options={sellers}
        />
        <StyledSelect
          handle={handleCountry}
          selected={selectedCountry}
          options={countries}
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
