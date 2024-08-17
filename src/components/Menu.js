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
  justify-content: right;
  align-items: center;
  padding: 2vh 2vw;
  background-color: #7e2098;
  color: #ffffff;
  position: fixed;
  width: 100%;
  column-gap: 1vw;
`;
const MenuItem = styled.div`
  border: ${props => props.isSelected ? ("4px solid #ffffff"):("2px solid #ffffff")};
  padding: 1vh 2vw;
  font-size: 20px;
  border-radius: 10px;
  user-select: none;
  cursor: pointer;
`;
