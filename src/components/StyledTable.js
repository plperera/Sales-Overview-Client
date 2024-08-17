import React from "react";
import styled from "styled-components";

const StyledTable = ({ ordersData }) => {
  // Cria um array com 10 posições
  const rows = new Array(10).fill(null);

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
        {rows.map((_, index) => {
          const order = ordersData?.[index];
          return (
            <tr key={order?.orderId || index}>
              <td>{order?.orderId || "-"}</td>
              <td>{order?.product || "-"}</td>
              <td>{order?.price || "-"}</td>
              <td>{order?.sellerName || "-"}</td>
              <td>{order?.country || "-"}</td>
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
