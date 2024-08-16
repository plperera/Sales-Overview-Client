import React from "react";
import styled from "styled-components";
import SellerCard from "./SellerCard";

const BestSellers = [
  { id: 1, name: "Seller #1", totalSales: 9999.99 },
  { id: 2, name: "Seller #2", totalSales: 8888.99 },
  { id: 3, name: "Seller #3", totalSales: 7777.99 },
];

const SellersOverview = () => (
  <Container>
    {BestSellers.map((seller) => (
      <SellerCard key={seller.id} sellerData={seller}/>
    ))}
  </Container>
);

export default SellersOverview;

const Container = styled.div`
  min-height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1.5vw;
`;
