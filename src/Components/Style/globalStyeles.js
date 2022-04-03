import styled, {createGlobalStyle, css} from 'styled-components'

const Global = createGlobalStyle`
*{
  box-sizing: border-box;
}

:root {
  --family: 'Nunito Sans', san-serif;
  --fs-sm: 14px;
  --fs-md: 16px;
  --fw-light: 300;
  --fw-normal: 600;
  --fw-bold: 800;

  --radii: 0.5 reml
}

body {
  margin: 0px;
  transition: 0.5s;

}

body[data-theme='Dark'] {
  --colors-text: hsl(0, 0%, 100%);
  --colors-bg: hsl(207, 26%, 17%);
  --colors-ui-base: hsl(209, 23%, 22%);
 
  --shadow: rgba(245, 245, 245, 0.2) 0 0 8px;
}
body[data-theme='Light'] {
  --colors-text: hsl(200, 15%, 8%);
  --colors-bg: hsl(0, 0%, 98%);
  --colors-ui-base: hsl(0, 0%,100%);
  --shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

body {
  margin: 0;
  font-family: var(--family);
  background-color: ${props=>props.theme.body};
  font-weight: var(--fw-light);
  
}
`

export default Global;