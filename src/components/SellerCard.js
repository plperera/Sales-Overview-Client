import React from 'react';
import styled from 'styled-components';

const SellerCard = ({ sellerData }) => (
  <Container>
    <Title>{"Total of " + sellerData?.sellerName}</Title>
    <TotalSales>{"$" + sellerData?.totalSales?.toFixed(2)}</TotalSales>
  </Container>
);

export default SellerCard;

const Container = styled.div`
  width: 100%;
  border: 3px solid #7E2098;
  color: #7E2098;
  padding: 1vw;
`;
const Title = styled.h3`
  font-size: 28px;
`
const TotalSales = styled.div`
  font-size: 34px;
  text-align: right;
`
