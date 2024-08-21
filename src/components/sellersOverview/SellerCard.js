import React from 'react';
import styled from 'styled-components';
import { FaMedal } from "react-icons/fa6";
import { useModal } from '../../context/ModalContext';
import SellerModal from '../sellerModal/SellerModal';
import { formatValue } from '../../utils/formatValue';

const SellerCard = ({ sellerData, index }) => {
  const color = {
    0: "#FCC617",
    1: "#AAAAAA",
    2: "#C47744"
  }
  const { openModal } = useModal();
  
  return (
    <Container onClick={() => openModal(<SellerModal sellerId={sellerData?.sellerId}/>)}>
      <Title>{sellerData?.sellerName}</Title>
      <TotalSales>{"$ " + formatValue({value: sellerData?.totalSales, min: 2, max: 2})}</TotalSales>
      <MedalIcon medalColor={color[index]}>
        <FaMedal/>
      </MedalIcon>
    </Container>
  );
};

export default SellerCard;

const Container = styled.div`
  width: 32%;
  padding: 2.5vh 1.5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 3.5vw;
  position: relative;
  row-gap: 1.4vh;
  background: #FFFFFF;
  border-radius: 10px;
  border: 5px solid #F0F0F0;
  cursor: pointer;
  user-select: none;
  transition: all ease .2s;
  &:hover {
    transform: scale(1.05);
    border: 5px solid #757BA7;
    > h3 {
      color: #606691;
    }
  }
`;
const Title = styled.h3`
  font-size: 26px;
  color: #929292;
`
const TotalSales = styled.div`
  font-size: 34px;
  color: #8820CE;
  font-weight: 700;
`

const MedalIcon = styled.div`
  position: absolute;
  right: 0.6vw;
  top: -5px;
  font-size: 40px;
  color: ${props => props.medalColor};
`
