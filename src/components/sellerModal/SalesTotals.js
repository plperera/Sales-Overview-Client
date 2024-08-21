import React from 'react';
import styled from 'styled-components';
import { formatValue } from '../../utils/formatValue';

const SalesTotals = ({ sellerData }) => {
  return (
    <TotalsContainer>
      <TotalCard>
        <p>{"$ " + formatValue({ value: sellerData?.totalValue })}</p>
        <p>Sales Value</p>
      </TotalCard>
      <TotalCard>
        <p>{sellerData?.totalSales}</p>
        <p>Number of Sales</p>
      </TotalCard>
      <TotalCard>
        <p>{"$ " + formatValue({ value: sellerData?.totalValue / sellerData?.totalSales })}</p>
        <p>Average Ticket</p>
      </TotalCard>
    </TotalsContainer>
  );
};

export default SalesTotals;

const TotalsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2vh 0;
  column-gap: 1vw;
`;

const TotalCard = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 1vh;
  > *:first-child {
    font-size: 22px;
    font-weight: 600;
    color: #44434D;
  }
  > *:last-child {
    font-size: 14px;
    color: #9795AC;
  }
`;
