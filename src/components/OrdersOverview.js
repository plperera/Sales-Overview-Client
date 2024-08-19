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
  const [orderBy, setOrderBy] = useState(undefined);
  const [sellers, setSellers] = useState(undefined);

  useEffect(() => {
    GetOrders({
      page: selectPageIndex, 
      sellerId: selectedSeller, 
      country: selectedCountry, 
      orderBy: orderBy
    });
  }, [selectPageIndex, selectedSeller, selectedCountry, orderBy]);

  useEffect(() => {
    GetSellers()
  }, [])

  async function GetSellers() {
    try {
      const response = await api.GetSellers();
      setSellers(response?.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function GetOrders({page, sellerId, country, orderBy}) {
    try {
      const response = await api.GetOrdersWithPagination({
        page,
        sellerId,
        country,
        orderBy
      });
      setPaginationData(response?.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleOrderBy = (item) => {
    if (orderBy === item + "-ASC") {
      setOrderBy(item + "-DESC");
    } else {
      setOrderBy(item + "-ASC");
    }
    setSelectPageIndex(1);
  };

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

  const countries = [
    { id: "BRA", name: "BRA" },
    { id: "ARG", name: "ARG" },
    { id: "MEX", name: "MEX" },
  ];

  return (
    <Container>
      <HeadContainer>
        <h3>Orders</h3>
        <FiltersContainer>
          <StyledSelect
            handle={handleSeller}
            selected={selectedSeller}
            options={sellers}
            labelText={"All Sellers"}
          />
          <StyledSelect
            handle={handleCountry}
            selected={selectedCountry}
            options={countries}
            labelText={"All Countries"}
          />
        </FiltersContainer>
      </HeadContainer>
      <StyledTable ordersData={paginationData?.ordersData} orderBy={orderBy} handleOrderBy={handleOrderBy}/>
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
  padding: 2vh 2vw;

`;
const FiltersContainer = styled.div`
  display: flex;
  column-gap: 1vw;
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;  
  justify-content: space-between;
  width: 100%;
  > h3 {
    font-size: 36px;
    font-weight: 600;
    color: #9795AC;
  }
`;
