import React from 'react';
import styled from 'styled-components';

const BestSellingProducts = ({ products }) => {
  return (
    <>
      <SubTitle>Best Selling Products</SubTitle>
      <ProductsContainer>
        {products?.map(product => 
          <ProductCard key={product?.name}>
            <ProductName>{product?.name}</ProductName>
            <ProductSales>{product?.sales}</ProductSales>
          </ProductCard> 
        )}
      </ProductsContainer>
    </>
  );
};

export default BestSellingProducts;

const SubTitle = styled.h4`
  font-size: 22px;
  font-weight: 600;
  color: #9795AC;
  margin-top: 2vh;
`;

const ProductsContainer = styled.div`
  display: flex;
  padding: 1.5vh 0;
  padding-bottom: 0;
  column-gap: 1vw;
`;

const ProductCard = styled.div`
  padding: 2.5vh 2vw;
  background-color: #FFFFFF;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1vh;
  position: relative;
  border: 4px solid #F0F0F0;
`;

const ProductName = styled.p`
  font-size: 18px;
  padding-top: 4px;
`;

const ProductSales = styled.p`
  background-color: #B04ECB;
  font-size: 16px;
  font-weight: 600;
  color: #FFFFFF;
  padding: 6px 10px;
  border-radius: 10px;
  position: absolute;
  top: -2.2vh;  
  border: 4px solid #F0F0F0;
`;
