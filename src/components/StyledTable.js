import React from "react";
import styled from "styled-components";

const StyledTable = () => {
  const orders = [
    {
      orderId: "2019060001",
      product: "Laptop #1",
      price: 1000,
      sellerName: "Seller #1",
      country: "BRA",
    },
    {
      orderId: "2019060001",
      product: "Laptop #1",
      price: 1000,
      sellerName: "Seller #1",
      country: "BRA",
    },
    {
      orderId: "2019060001",
      product: "Laptop #1",
      price: 1000,
      sellerName: "Seller #1",
      country: "BRA",
    },
    {
      orderId: "2019060001",
      product: "Laptop #1",
      price: 1000,
      sellerName: "Seller #1",
      country: "BRA",
    },
    {
      orderId: "2019060001",
      product: "Laptop #1",
      price: 1000,
      sellerName: "Seller #1",
      country: "BRA",
    },
    {
      orderId: "2019060001",
      product: "Laptop #1",
      price: 1000,
      sellerName: "Seller #1",
      country: "BRA",
    },
  ];

  return (
    <TableContainer>
      <TableHead>
        <tr>
          <th>Order Id</th>
          <th>Product</th>
          <th>Price</th>
          <th>Seller</th>
          <th>Country</th>
        </tr>
      </TableHead>
      <TableBody>
        {orders.map((order) => (
          <tr key={order.orderId}>
            <td>{order.orderId}</td>
            <td>{order.product}</td>
            <td>{order.price}</td>
            <td>{order.sellerName}</td>
            <td>{order.country}</td>
          </tr>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default StyledTable;

const TableContainer = styled.table`
  width: 100%;
  border: 2px solid #000000;
  border-collapse: collapse;
  font-size: 20px;
  th, td {
    border: 2px solid #000000;
    padding: 12px;
    text-align: left;
  }
`;

const TableHead = styled.thead`
  th {
    background-color: #800080;
  }
`;
const TableBody = styled.tbody`
  tr {
    &:nth-child(even) {
      background-color: #dacafb;
    }
    &:nth-child(odd) {
      background-color: #fffefe;
    }
  }
`;
