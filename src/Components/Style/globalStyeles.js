import styled, {createGlobalStyle, css} from 'styled-components'

const Global = createGlobalStyle`
*{
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: var(--family);
  background-color: ${props=>props.theme.body};
  font-weight: var(--fw-light);
  
}
`

export default Global;