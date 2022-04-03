import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import InputContainer from "./Style/inputContainer";

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  margin-left: 1rem;
  border: none;
  outline: none;
  background-color:${props=>props.theme.colorsUiBase} ;
  color: ${props=>props.theme.fontColor};
  font-size: 1rem;
  cursor: 'pointer',
`;

export const Search = ({ search, setSearch }) => {
  return (
    <InputContainer border={"3px solid coral"}>
      <IoSearch style={{color: 'lightblue'}}/>
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};
