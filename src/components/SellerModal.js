import React from 'react';
import styled from 'styled-components';
import { useModal } from '../context/ModalContext';
import PizzaGraphic from '../common/PizzaGraphic';
import { IoClose } from "react-icons/io5";

const SellerModal = () => {
  const { closeModal } = useModal();

  const sellerData = {
    name: "Seller Name #1",
    totalSales: 150,
    totalValue: 12745,
    salesByCountry: [
      { name: "BRA", amount: 6250, color: "#36A0DD"},
      { name: "ARG", amount: 4248, color: "#9452FF"},
      { name: "MEX", amount: 2247, color: "#DD36AB"},
    ],
    topProducts: [
      {name: "Notebook #1", sales: 12},
      {name: "Printer #1", sales: 12},
      {name: "Smartphone #1", sales: 12}
    ]
  };

  const totalSalesValue = sellerData.salesByCountry.reduce((acc, country) => acc + country.amount, 0);

  const getPercentage = (value) => ((value / totalSalesValue) * 100).toFixed(2);

  return (
    <Container>
      <TopContainer>
        <Title>{sellerData?.name}</Title>
        <StyledIcon onClick={closeModal}/>
      </TopContainer>
      <GraphicContainer>
        
        <PizzaGraphic data={sellerData?.salesByCountry} size={"250px"}/>
        
        <CountryContainer>
          {sellerData?.salesByCountry?.map( country => 
            <CountryCard key={country?.name} color={country?.color}>
              <CountryPercentual>{`${getPercentage(country?.amount)}%`}</CountryPercentual>
              <CountryName>{country?.name}</CountryName>
              <CountrySales color={country?.color}>{"$ " + country?.amount}</CountrySales>
            </CountryCard>
          )}
        </CountryContainer>

      </GraphicContainer>

      <SubTitle>Produtos mais Vendidos</SubTitle>

      <ProductsContainer>
        {sellerData?.topProducts?.map(product => 
          <ProductCard>
            <ProductName>{product?.name}</ProductName>
            <ProductSales>{product?.sales}</ProductSales>
          </ProductCard> 
        )}
        
      </ProductsContainer>
    </Container>
  );
};

export default SellerModal;

const Container = styled.div`
  width: 100%;
  background-color: #F5F5F5;
  padding: 3.5vh 2vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 3vh;
`;
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.h3`
  font-size: 36px;
  font-weight: 600;
  color: #9795AC;
`
const StyledIcon = styled(IoClose)`
  font-size: 36px;
  color: #9795AC;
  cursor: pointer;
  transition: all ease .3s;
  &:hover {
    color: #FF4444;
  }
`
const SubTitle = styled.h4`
  font-size: 22px;
  font-weight: 600;
  color: #9795AC;
  margin-top: 2vh;
`
const GraphicContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 2vw;
`
const CountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  width: 30%;
  height: 250px;
`
const CountryCard = styled.div`
  width: 180px;
  height: 55px;
  padding: 1.8vh 1vw;
  background-color: #FFFFFF;
  border: ${props => `3px solid ${props.color}`};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  &:hover > *:first-child {
    display: initial;
  }
  &:hover {
    background-color: ${props => props.color};
    border: 3px solid #FFFFFF;
  }
  &:hover > *:last-child {
    display: none;
  }
`
const CountryPercentual = styled.p`
  display: none;
  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
  text-align: center;
`
const CountryName = styled.p`
  font-size: 20px;
  position: absolute;
  top: -1.8vh;
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 2px 5px;
`
const CountrySales = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.color};
`
const ProductsContainer = styled.div`
  display: flex;
  padding: 1.5vh 0;
  column-gap: 1vw;
  row-gap: 2vh;
`
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
`
const ProductName = styled.p`
  font-size: 18px;
  padding-top: 4px;
`
const ProductSales = styled.p`
  background-color: #B04ECB;
  font-size: 16px;
  font-weight: 600;
  color: #FFFFFF;
  padding: 6px;
  border-radius: 10px;
  position: absolute;
  top: -2.2vh;  
  border: 4px solid #F0F0F0;

`