import { Header } from "../header";
import {
  
  Routes,
  Route,
  
} from 'react-router-dom';
import { ALL_COUNTIES } from "../config";
import React, { useState, useEffect, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import Global from "../Style/globalStyeles";
import { useLocalStorage } from "../hooks/useLocal";
import { Main } from "../Style/Main";


import HomePage from "../../Pages/HomePage";
import Details from "../../Pages/Details";
import NotFound from "../../Pages/NotFound";



const lightheme = {
  fontColor: "hsl(200, 15%, 8%)",
  body: "rgb(250, 250, 250)",
  colorsUiBase: "hsl(0, 0%,100%)",
  shadow: "rgba(149, 157, 165, 0.2) 0 8px 24px",
};
const darktheme = {
  fontColor: "hsl(0, 0%, 100%)",
  body: "rgb(32, 44, 55)",
  colorsUiBase: "hsl(209, 23%, 22%)",
  shadow: "rgba(245, 245, 245, 0.2) 0 0 8px",
};

function App() {
  const [themType, setThemeType] = useLocalStorage([], "themType");

  const [theme, setTheme] = useState(themType[0]);

  const [countries, setCountries] = useState([]);

  const themeToggler = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
      setThemeType(["dark"]);
    } else {
      setTheme("light");
      setThemeType(["light"]);
      console.log(themType);
    }
  }, [theme]);

  useEffect(function () {
    if(!countries.length)  
    fetch(ALL_COUNTIES)
    .then((response) =>  response.json()
      )
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        alert(error)
      })
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightheme : darktheme}>
      <Global />
      <Header theme={theme} themeToggler={themeToggler} />
      <Main>
        <Routes>
          <Route exact path="/" element={<HomePage countries={countries} setCountries={setCountries}/>}/>
           
          <Route  path="/country/:name" element={countries && <Details countries={countries}/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Main>
      

    </ThemeProvider>
  );
}

export default App;
