import styled from "styled-components";
import { useState, useEffect } from "react";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Container } from "./Style/container";
import { Link } from "react-router-dom";

const HeaderEl = styled.header`
  box-shadow: ${props=>props.theme.shadow};
  transition: 0.5s;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  
`;

const Title = styled(Link).attrs({ to: "/" })`
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
  color: ${props=>props.theme.fontColor};
`;

const ModeSwitcher = styled.div`
    color: ${props=>props.theme.fontColor};
  cursor: pointer;
  font-size: var(--fs-sm);
  text-transform: capitalize;
`;

export const Header = (props) => {
    
 const theme = props.theme;
 const themeToggler = props.themeToggler; 

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={() => themeToggler()}>
            {theme === "light" ? (
              <IoMoonOutline size="14px" style={{position: 'relative', left: '7px', top: '1px'}}></IoMoonOutline>
            ) : (
              <IoMoon size="14px" style={{position: 'relative', left: '7px', top: '1px'}} />
            )}
            <span style={{ margin: "0.75rem", fontSize: '17px' }}>{theme}</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
