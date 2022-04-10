import { Link } from "react-router-dom";

import List from "../Components/List";
import Card from "../Components/Card";
import { Container } from "../Components/Style/container";


import { Controls } from "../Components/controls";
import React, { useState, useEffect } from "react";

function HomePage({countries, setCountries}) {
  
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch =(search, region)=>{
    let data =[...countries];

    if(region) {
      data = data.filter(item => item.region.includes(region))
    }

    if(search) {
      data= data.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
      

    setFilteredCountries(data)

  }

  

  return (
    <>
      <Container>
        <Controls onSearch={handleSearch} countries={countries} />
        <List>
          {filteredCountries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              alpha2Code: c.alpha2Code,
              info: [
                {
                  title: "Population",
                  description: c.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: c.region,
                },
                {
                  title: "Capital",
                  description: c.capital,
                },
              ],
            };
            return (
              <Link
                to={`/country/${c.name}`}
                key={c.name}
                
                style={{ textDecoration: 'none' }}
                
              >
                <Card  {...countryInfo} />
              </Link>
            );
          })}
        </List>
      </Container>
    </>
  );
}

export default HomePage;
