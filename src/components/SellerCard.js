import React from 'react';
import styled from 'styled-components';
import { FaMedal } from "react-icons/fa6";
import { useModal } from '../context/ModalContext';
import SellerModal from './SellerModal';

const SellerCard = ({ sellerData, index }) => {
  const color = {
    0: "#FCC617",
    1: "#AAAAAA",
    2: "#C47744"
  }
  const { openModal, closeModal } = useModal();
  return (
    <Container>
      <Title onClick={() => openModal(<SellerModal />)}>{sellerData?.sellerName}</Title>
      <TotalSales>{"$ " + sellerData?.totalSales?.toFixed(2)}</TotalSales>
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
  color: #000000;
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
