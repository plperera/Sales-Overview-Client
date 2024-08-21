import React from 'react';
import styled from 'styled-components';
import { IoClose } from "react-icons/io5";

const ModalHeader = ({ title, closeModal }) => {
  return (
    <TopContainer>
      <Title>{title}</Title>
      <StyledIcon onClick={closeModal}/>
    </TopContainer>
  );
};

export default ModalHeader;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 400px;
`;

const Title = styled.h3`
  font-size: 36px;
  font-weight: 600;
  color: #9795AC;
`;

const StyledIcon = styled(IoClose)`
  font-size: 36px;
  color: #9795AC;
  cursor: pointer;
  transition: all ease .3s;
  &:hover {
    color: #FF4444;
  }
`;
