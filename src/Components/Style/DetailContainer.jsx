import styled from "styled-components";


const DetailContainer = styled.label`
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
    
    

    @media(min-width: 767px) {
        display: flex ;
        flex-direction: row ;
        justify-content: space-between ;
        
    }

`;

export default DetailContainer;