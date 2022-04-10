import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { filterByCode } from "./config";
import StyeledButton from "./Style/button";
import { StyledKey } from "./Style/text";
import { StyledValue } from "./Style/text";
import { Link, useParams } from "react-router-dom";



const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  padding: 0.6rem;
  
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const GorizontDiv = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap ;
`;
const H3 = styled.h3`
  font-size: 2rem;
`;

function CountryInfo(props) {
  const countryInf = props.country;
  const listOfCounties = props.newCountries;

  const [borders, setBorders] = useState([]);
  const [neighbords, setNeighbords] = useState([]);

  useEffect(() => {
    let arr = [];
    if (countryInf.borders) {
      countryInf.borders.forEach((item) => arr.push(item.toLowerCase()));

      setBorders(arr);
    }
  }, [countryInf, listOfCounties]);

  useEffect(
    function () {
      if (borders.length)
        fetch(filterByCode(borders))
          .then((response) => response.json())
          .then((data) => {
            setNeighbords(data.map((item) => item));
          })
          .catch((error) => {
            alert(error);
          });
    },
    [borders]
  );

  function Conto() {
    if (countryInf) {
      return (
        <StDiv>
          <div>
            <H3>{countryInf.name}</H3>
          </div>
          <GorizontDiv>
            <div>
              <div><StyledKey>Native name: </StyledKey><StyledValue>{countryInf.nativeName}</StyledValue> </div>
              <div><StyledKey>Population: </StyledKey><StyledValue>{countryInf.population}</StyledValue></div>
              <div><StyledKey>Region: </StyledKey><StyledValue>{countryInf.region}</StyledValue></div>
            </div>
            <div>
              <div><StyledKey>Top level domain: </StyledKey><StyledValue>{countryInf.topLevelDomain}</StyledValue></div>
              <div>
                <StyledKey>Currency:{" "}</StyledKey>
                {countryInf.currencies.map((item3) => {
                  return <StyledValue key={item3.name}>{item3.name}</StyledValue>;
                })}
              </div>
              <div>
                <StyledKey>Languages:{" "}</StyledKey>
                {countryInf.languages.map((item2) => {
                  return <StyledValue key={item2.name}>{item2.name} </StyledValue>;
                })}
              </div>
            </div>
            
          </GorizontDiv>
          <div>
            <StyledKey>Border countries: </StyledKey>
            {borders.length === 0 ? (
              <StyledValue> There are no border countries</StyledValue>
            ) : (
              neighbords.map((item) => {
                
                return (
                <StyledValue key={item.name}>
                <Link
                to={`/country/${item.name}`}
                
                
                style={{ textDecoration: 'none' }} 
                >
                  
                    <StyeledButton key={item.name}>{item.name}</StyeledButton>{" "}
                  
                </Link>
                </StyledValue>
                  
              )})
            )}
          </div>
        </StDiv>
      );
    } else {
      return <div>Wait a little bit...</div>;
    }
  }

  return <Conto />;
}

export default CountryInfo;
