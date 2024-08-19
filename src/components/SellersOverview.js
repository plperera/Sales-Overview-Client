import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SellerCard from "./SellerCard";
import api from "../services/api";


const SellersOverview = () => {

  const [bestSellers, setBestSellers] = useState(undefined)

  useEffect(() => {
    GetTopSellers()
  }, [])

  async function GetTopSellers() {
    try {
      const response = await api.GetTopSellers()
      setBestSellers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <h3>Top Sellers</h3>
      <SellersContainer>
        {bestSellers?.map((seller, index) => (
          <SellerCard key={seller?.sellerId} sellerData={seller} index={index}/>
        ))}
      </SellersContainer>
      
    </Container>
  );
};

export default SellersOverview;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5vh;
  min-height: 10vh;
  width: 100%;
  padding: 0vh 2vw;
  > h3 {
    font-size: 36px;
    font-weight: 600;
    color: #9795AC;
  }
`;

const SellersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`