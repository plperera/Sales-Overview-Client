import React from 'react';
import styled from 'styled-components';
import SellersOverview from '../components/sellersOverview/SellersOverview';
import OrdersOverview from '../components/ordersOverview/OrdersOverview';

const Home = () => (
  <HomeContainer>
    <SellersOverview/>
    <OrdersOverview/>
  </HomeContainer>
);

export default Home;

const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 6vh 0vw;
  padding-bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 3.5vh;
  background-color: #E9E9E9;
`;
