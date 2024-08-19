import React from "react";
import styled from "styled-components";
import { IoCaretDownSharp } from "react-icons/io5";

const StyledSelect = ({ handle, selected, options, labelText }) => {

  return (
    <Wrapper>
      <Select value={selected} onChange={handle}>
        <option value={''}>{labelText}</option>
        {options?.map((opt) => (
          <option key={opt?.id} value={opt?.id}>{opt?.name}</option>
        ))}
      </Select>
      <Icon />
    </Wrapper>
  );
};

export default StyledSelect;

const Wrapper = styled.div`
  position: relative;
`;

const Select = styled.select`
  height: 40px;
  font-size: 16px;
  padding: 10px 25px;
  padding-right: calc(25px + 30px);
  border-radius: 10px;
  border: 3px solid #7c7c7c;
  background-color: #fffefb;
  color: #434343;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  option {
    background-color: #fffefb;
    color: #333;
  }
`;

const Icon = styled(IoCaretDownSharp)`
  position: absolute;
  top: 50%;
  right: 0;
  width: 40px;
  height: 40px;
  padding: 10px;
  font-size: 20px;
  color: #696969;
  border: 3px solid #7c7c7c;
  background-color: #e6e6e6;
  border-radius: 0 10px 10px 0;

  transform: translateY(-50%);
  pointer-events: none;
  z-index: 999;
`;
