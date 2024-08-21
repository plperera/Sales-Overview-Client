import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StyledTable from "./StyledTable";
import StyledSelect from "../../common/StyledSelect";
import api from "../../services/api";
import Pagination from "./Pagination";

const OrdersOverview = () => {
  const [filters, setFilters] = useState({
    sellerId: undefined,
    country: undefined,
    orderBy: undefined,
  });

  const [pagination, setPagination] = useState({
    pageIndex: 1,
    data: undefined,
  });

  const [sellers, setSellers] = useState(undefined);

  useEffect(() => {
    GetOrders({
      page: pagination.pageIndex, 
      ...filters
    });
  }, [pagination.pageIndex, filters]);

  useEffect(() => {
    GetSellers();
  }, []);

  async function GetSellers() {
    try {
      const response = await api.GetSellers();
      setSellers(response?.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function GetOrders({ page, sellerId, country, orderBy }) {
    try {
      const response = await api.GetOrdersWithPagination({
        page,
        sellerId,
        country,
        orderBy
      });
      setPagination((prev) => ({ ...prev, data: response?.data }));
    } catch (error) {
      console.log(error);
    }
  }

  const handleFilterChange = (event, filterType) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: event.target.value,
    }));
    setPagination(prev => ({ ...prev, pageIndex: 1 }));
  };

  const handleOrderBy = (item) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      orderBy: prevFilters.orderBy === item + "-ASC" ? item + "-DESC" : item + "-ASC"
    }));
    setPagination(prev => ({ ...prev, pageIndex: 1 }));
  };

  const handlePageIndex = (index) => {
    if (
      !pagination.data ||
      !pagination.data.lastPage ||
      index > pagination.data.lastPage ||
      index < 1
    ) {
      return;
    }

    setPagination((prev) => ({ ...prev, pageIndex: index }));
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
            handle={(e) => handleFilterChange(e, 'sellerId')}
            selected={filters.sellerId}
            options={sellers}
            labelText={"All Sellers"}
          />
          <StyledSelect
            handle={(e) => handleFilterChange(e, 'country')}
            selected={filters.country}
            options={countries}
            labelText={"All Countries"}
          />
        </FiltersContainer>
      </HeadContainer>
      <StyledTable 
        ordersData={pagination.data?.ordersData} 
        orderBy={filters.orderBy} 
        handleOrderBy={handleOrderBy} 
      />
      <Pagination
        totalPages={pagination.data?.lastPage}
        selectPageIndex={pagination.pageIndex}
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
