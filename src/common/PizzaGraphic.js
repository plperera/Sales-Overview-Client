import React from "react";
import styled from "styled-components";

const PizzaGraphic = ({ data, size }) => {

  const getPercentage = (value) => (value / total) * 100;

  const total = data?.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const segments = data?.map( e => {
    return ({
      name: e?.name,
      percentage: getPercentage(e?.amount),
      color: e?.color,
    })
  })

  const gradient = segments
    ?.map((segment, index) => {
      const startAngle =
        segments
          ?.slice(0, index)
          ?.reduce((acc, segment) => acc + segment?.percentage, 0) * 3.6;
      const endAngle = startAngle + segment?.percentage * 3.6;
      return `${segment?.color} ${startAngle}deg ${endAngle}deg`;
    })
    ?.join(", ");

  return (
    <>
      <Pie style={{ background: `conic-gradient(${gradient})` }} size={size}/>
    </>
  );
};

export default PizzaGraphic;

const Pie = styled.div`
  width: ${props => props?.size|| "200px"};
  height: ${props => props?.size|| "200px"};
  border-radius: 50%;
  border: 5px solid #C7C7C7;
`;
