import React from "react";
import styled from "styled-components";
import { useModal } from "../context/ModalContext";
import SellerModal from "./SellerModal";

const StyledTable = ({ ordersData, orderBy, handleOrderBy }) => {
  const rows = new Array(6).fill(null);

  const getIcon = (item) => {
    if (orderBy === item + "-ASC") return "▲";;
    if (orderBy === item + "-DESC") return "▼"; 
    return "▼";
  }

  const { openModal, closeModal } = useModal();

  const handleModal = (sellerId) => {
    if (!sellerId) {
      return
    }
    openModal(<SellerModal sellerId={sellerId}/>)
    return
  }

  const TableheadItens = [
    {id: "orderId", name:" Order Id"},
    {id: "product", name:" Product"},
    {id: "price", name:" Price"},
    {id: "seller", name:" Seller"},
    {id: "country", name:" Country"},
  ]

  return (
    <TableContainer>
      <TableHead>
        <tr>
          {TableheadItens?.map(item => 
            <StyledTh
              isSelected={orderBy === item?.id + "-ASC" || orderBy === item?.id + "-DESC"}
              onClick={() => handleOrderBy(item?.id)}><span>{getIcon(item?.id)}</span> {item?.name}
            </StyledTh>
          )}
        </tr>
      </TableHead>
      <TableBody>
        {rows.map((_, index) => {
          const order = ordersData?.[index];
          return (
            <tr key={order?.orderId || index}>
              <StyledTd hasItem={order?.orderId}>{order?.orderId || "-"}</StyledTd>
              <StyledTd hasItem={order?.orderId}>{order?.product || "-"}</StyledTd>
              <StyledTd hasItem={order?.orderId}>{order?.price || "-"}</StyledTd>
              <StyledTd hasItem={order?.orderId} hasModal={!!order?.sellerId} 
                onClick={() => handleModal(order?.sellerId)}
              >{order?.seller || "-"}</StyledTd>
              <StyledTd hasItem={order?.orderId}>{order?.country || "-"}</StyledTd>
            </tr>
          );
        })}
      </TableBody>
    </TableContainer>
  );
};

export default StyledTable;

const TableContainer = styled.table`
  width: 100%;
  font-size: 20px;
  th, td {
    border: 3px solid #F0F0F0;
    padding: 12px;
    text-align: left;
  }
`;

const TableHead = styled.thead`
  th {
    font-weight: 600;
    color: #FFFFFF;
  }
`;
const StyledTd = styled.td`
  color: ${props => props.hasItem ? "initial":"#FFFFFF"};
  user-select: ${props => props.hasItem ? "initial":"none"};
  transition: all ease .2s;
  cursor: ${props => props.hasModal ? "pointer":"initial"};
  &:hover {
    transform: ${props => props.hasModal ? "scale(1.02)":"none"};
    color: ${props => props.hasModal ? "#606691":""};
    text-decoration: ${props => props.hasModal ? "underline":"initial"};
  }
`;
const TableBody = styled.tbody`
  tr {
    
    &:nth-child(even) {
      background-color: #FFFFFF;
      &:hover{
        background-color: #5E52FF23;
      }
    }
    &:nth-child(odd) {
      background-color: #F5F2FF;
      &:hover{
        background-color: #5E52FF23;
      }
    }
  }
`;

const StyledTh = styled.th`
  cursor: pointer;
  user-select: none;
  background-color: ${props => props.isSelected ? ("#9452FF"):("#7132D6")};
`
