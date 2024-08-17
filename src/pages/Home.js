import React from 'react';
import styled from 'styled-components';
import SellersOverview from '../components/SellersOverview';
import OrdersOverview from '../components/OrdersOverview';

const Home = () => (
  <HomeContainer>
    <Title>Orders</Title>
    <SellersOverview/>
    <OrdersOverview/>
  </HomeContainer>
);

export default Home;

const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 11vh 2vw;
  padding-bottom: 0;
  width: 100%;
  color: #000;
  display: flex;
  flex-direction: column;
  row-gap: 4.5vh;
`;
const Title = styled.h1`
  font-size: 40px;
`
