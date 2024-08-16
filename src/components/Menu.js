import React, { useState } from "react";
import styled from "styled-components";

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("#home");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <HeaderContainer>
      <Logo>WEBAPP</Logo>
      <Nav isOpen={isMobileMenuOpen}>
        <NavList>
          <NavItem>
            <NavLink
              href="#order"
              onClick={() => handleMenuItemClick("#order")}
              selected={selectedItem === "#order"}
            >
              Orders
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#sellers"
              onClick={() => handleMenuItemClick("#sellers")}
              selected={selectedItem === "#sellers"}
            >
              Sellers
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
      <MenuIcon onClick={toggleMobileMenu}>
        <MenuIconLine />
        <MenuIconLine />
        <MenuIconLine />
      </MenuIcon>
    </HeaderContainer>
  );
};

export default Menu;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
  position: fixed;
  width: 100%;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.li`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${({ selected }) => (selected ? "#ddd" : "white")};
  font-size: 1rem;
  position: relative;
  transition: color 0.3s;

  &:hover {
    color: #ddd;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ selected }) => (selected ? "100%" : "0")};
    height: 2px;
    background-color: white;
    transition: width 0.3s, left 0.3s;
  }

  &:hover:after {
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuIconLine = styled.span`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
`;
