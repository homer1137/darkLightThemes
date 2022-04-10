import styled from 'styled-components'

const StyeledButton = styled.button`
    margin: 0.1rem 0.5rem;
    align-items: center;
    border-radius: 3rem;
    border: 1px solid;
    box-shadow: ${props=>props.theme.shadow};
    padding: 0.3rem 0.5rem ;
    margin-bottom: 1rem;
    color: ${props=>props.theme.fontColor};
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0) ;
    cursor: pointer;
    width:max-content;
    height: max-content;
   
    transition-duration: 0.4s;

&:hover{
  background-color: coral;
  
}
&:active{
  background-color: beige;
}
`;

export default StyeledButton;
