import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <HeaderContainer>
      <MenuItem isSelected={location.pathname === "/"} onClick={() => navigate("/")}>Orders</MenuItem>
      <MenuItem isSelected={location.pathname === "/info"} onClick={() => navigate("/info")}>Info</MenuItem>
    </HeaderContainer>
  );
};

export default Menu;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vh 1.5vw;
  padding-right: 2vw;
  background-color: #FFFFFF;
  position: fixed;
  column-gap: 1vw;
  top: 1vh;
  right: 0;
  border-radius: 10px;
  z-index: 999;
`;
const MenuItem = styled.div`
  background-color: ${props => props.isSelected?("#9452FF"):("#7132D6")};
  color: #FFFFFF;
  padding: 1vh 2vw;
  font-size: 20px;
  font-weight: 600;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
  transition: all ease .2s;
  &:hover {
    transform: translateY(-3px);
  }
`;
