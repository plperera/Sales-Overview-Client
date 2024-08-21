import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useModal } from '../../context/ModalContext';
import api from '../../services/api';
import { formatValue } from '../../utils/formatValue';
import ModalHeader from './ModalHeader';
import CountrySales from './CountrySales';
import SalesTotals from './SalesTotals';
import BestSellingProducts from './BestSellingProducts';
import NoDataContainer from './NoDataContainer';

const SellerModal = ({ sellerId }) => {
  const { closeModal } = useModal();
  const [sellerData, setSellerData] = useState(undefined);

  useEffect(() => {
    GetSellerData(sellerId);
  }, [sellerId]);

  async function GetSellerData(sellerId) {
    try {
      const response = await api.GetSellerById(sellerId);
      setSellerData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <ModalHeader title={sellerData?.name || "No Data Available"} closeModal={closeModal} />
      
      {sellerData ? (
        <>
          <CountrySales salesData={sellerData.salesByCountry} totalValue={sellerData.totalValue} />
          <SalesTotals sellerData={sellerData} />
          <BestSellingProducts products={sellerData.topProducts} />
        </>
      ) : (
        <NoDataContainer>
          <p>No data available for this seller.</p>
        </NoDataContainer>
      )}
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
