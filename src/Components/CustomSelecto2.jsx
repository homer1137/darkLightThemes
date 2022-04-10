import styled from "styled-components";
import React from "react";
import InputContainer from "./Style/inputContainer";
import StyeledButton from "./Style/button";


const Select = styled.select.attrs({})`
  max-width: 150px;
  padding: 0.25rem;

  height: 35px;
  background-color: ${(props) => props.theme.colorsUiBase};
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
  font-size: 1rem;
  border-radius: var(--radii);
  box-shadow: ${(props) => props.theme.shadow};
  
`;

function CustomSelecto2({ value2, setValue }) {
  const parts = [
    ["America", "America"],
    ["Africa", "Africa"],
    ["Europe", "Europe"],
    ["Asia", "Asia"],
    ["Oceania", "Oceania"],
    ["Polar", "Polar"],
    ["Antarctic", "Antarctic"],
  ];

  function changeValue(e) {
    setValue(e.target.value);
  }

  return (
    <InputContainer border={"3px solid coral"}>
      <Select value={value2} onChange={changeValue} defaultValue={''}>
        <option value={""} disabled>
          -- Filter by region --
        </option>
        {parts.map((item) => {
          return (
            <option key={item[1]} value={item[0]}>
              {item[1]}
            </option>
          );
        })}
      </Select>
      <StyeledButton style={{margin:'0.4rem 0.4rem'}}onClick={() => setValue("")}>Reset</StyeledButton>
    </InputContainer>
  );
}

export default CustomSelecto2;
