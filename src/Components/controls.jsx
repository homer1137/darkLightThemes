import { useState, useEffect } from "react";
import { Search } from "./search";
import { Container } from "./Style/container";
import styled from "styled-components";
import CustomSelecto2 from "./CustomSelecto2";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column ;
  align-items: center;
  justify-content: space-between ;
  transition-duration: 1s;
  margin: 1rem;
  
  

  @media(min-width: 767px) {
    flex-direction: row ;
    justify-content: space-between;
    align-items: center;
    
  }

`;

export const Controls = ({onSearch, countries}) => {
  const [search, setSearch] = useState("");
  const [value2, setValue] = useState();

  useEffect(()=>{onSearch(search, value2)}, [search, value2, countries])

  return (
    <Container>
      <Wrapper>
        <Search search={search} setSearch={setSearch}></Search>

       <CustomSelecto2 value2={value2} setValue={setValue}/>
      </Wrapper>
    </Container>
  );
};
