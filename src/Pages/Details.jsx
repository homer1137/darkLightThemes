import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { searchByCountry } from "../Components/config";
import { Container } from "../Components/Style/container";
import DetailContainer from "../Components/Style/DetailContainer";
import StyeledButton from "../Components/Style/button";
import CountryInfo from "../Components/CountryInfo";

const DetailContainer2 = styled.div`
    padding: 1rem 1rem;
    margin: 1rem 1rem;
    display: flex;
    flex-direction: column ;
    align-items: center;
    border-radius: var(--radii);
    box-shadow: ${props=>props.theme.shadow};
    color: ${props=>props.theme.fontColor};
    font-size: ${props => props.size || '24px'};
    background-color:${props=>props.theme.colorsUiBase} ;
    flex-wrap: wrap ;
    

    @media(min-width: 767px) {
        display: flex ;
        flex-direction: row ;
        justify-content: space-between ;
        
    }

`;

const CardImage = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
  height: auto;
  @media (min-width: 767px) {
    max-width: 50%;
  }
`;

function Details({countries}) {
  
  function h2(){if (countries.length>0) {return(countries)}}

  const newCountries = h2();

  const [country, setCountry] = useState(null);

  let url = useLocation();
  let urlNorm = url.pathname.slice(9);


  useEffect(() => {
    fetch(searchByCountry(urlNorm))
      .then((data) => data.json())
      .then((data) => {
        
        if(data) {setCountry(data[0])}})
      .catch((err) => alert(err));
  }, [urlNorm]);




  const Image =()=> {
    if (country) {return (
      <CardImage src={country.flag} alt={'picture'}/>
    )} else {
      return(<div>Щас вылетит птичка</div>)
    }
  }

  
  
  return (
    <Container>
      <Link to={`/`} style={{textDecoration: 'none'}}>
        <StyeledButton>
          <IoArrowBack /> Go back
        </StyeledButton>
      </Link>
      <DetailContainer2>
      <Image/>

        {country && <CountryInfo country={country} newCountries={newCountries}/>}
      </DetailContainer2>
    </Container>
  );
}

export default Details;


