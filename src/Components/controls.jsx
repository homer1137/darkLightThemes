import { useState, useEffect } from "react";
import { Search } from "./search";
import { Container } from "./Style/container";
import styled from "styled-components";
import { CustomSelect } from "./CustomSelect";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Europe", label: "Europe" },
  { value: "Asia", label: "Asia" },
  { value: "Oceania", label: "Oceania" },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column ;
  align-items: flex-start;
  padding: 2rem 0;
  transition-duration: 1s;

  @media(min-width: 767px) {
    flex-direction: row ;
    justify-content: space-between;
    align-items: center;

  }

`;

export const Controls = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <Container>
      <Wrapper>
        <Search search={search} setSearch={setSearch}></Search>

        <CustomSelect
          options={options}
          placeholder="Filter by region"
          isClearable
          isSearchable={false}
          valure={region}
          onChange={setRegion}
        />
      </Wrapper>
    </Container>
  );
};
