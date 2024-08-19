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
      {bestSellers?.map((seller) => (
        <SellerCard key={seller?.sellerId} sellerData={seller}/>
      ))}
    </Container>
  );
};

export default SellersOverview;

const Container = styled.div`
  min-height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1.5vw;
`;
