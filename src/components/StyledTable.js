import React from "react";
import styled from "styled-components";

const StyledTable = ({ ordersData, orderBy, handleOrderBy }) => {
  const rows = new Array(10).fill(null);

  const getIcon = (item) => {
    if (orderBy === item + "-ASC") return "▲";;
    if (orderBy === item + "-DESC") return "▼"; 
    return "▼";
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
              <td>{order?.orderId || "-"}</td>
              <td>{order?.product || "-"}</td>
              <td>{order?.price || "-"}</td>
              <td>{order?.seller || "-"}</td>
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

const StyledTh = styled.th`
  cursor: pointer;
  user-select: none;
  color: ${props => props.isSelected ? ("white"):("initial")};
`
