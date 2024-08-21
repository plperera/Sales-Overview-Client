import React from 'react';
import styled from 'styled-components';
import PizzaGraphic from '../../common/PizzaGraphic';
import { formatValue } from '../../utils/formatValue';

const CountrySales = ({ salesData, totalValue }) => {
  const getPercentage = (value) => ((value / totalValue) * 100).toFixed(0);

  return (
    <GraphicContainer>
      <PizzaGraphic data={salesData} size={"250px"}/>
      <CountryContainer>
        {salesData?.map(country => 
          <CountryCard key={country?.name} color={country?.color}>
            <CountryPercentual>{`${getPercentage(country?.amount)}%`}</CountryPercentual>
            <CountryName>{country?.name}</CountryName>
            <CountrySalesValue color={country?.color}>{"$ " + formatValue({ value: country?.amount })}</CountrySalesValue>
          </CountryCard>
        )}
      </CountryContainer>
    </GraphicContainer>
  );
};

export default CountrySales;

const GraphicContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 2vw;
`;

const CountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  width: 30%;
  height: 250px;
`;

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
`;

const CountryPercentual = styled.p`
  display: none;
  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
  text-align: center;
`;

const CountryName = styled.p`
  font-size: 20px;
  position: absolute;
  top: -1.8vh;
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 2px 5px;
`;

const CountrySalesValue = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.color};
`;
