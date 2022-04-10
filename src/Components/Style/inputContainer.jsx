import styled from 'styled-components'

const StyeledContainer = styled.label`
    padding: 1rem 1rem;
    
    display: flex;
    align-items: center;
    border-radius: var(--radii);
    border: ${props => props.border || '22px solid  green'};
    box-shadow: ${props=>props.theme.shadow};
    width: 100%;
    color: ${props=>props.theme.fontColor};
    font-size: ${props => props.size || '24px'};
    background-color:${props=>props.theme.colorsUiBase} ;
    height: auto ;
    flex-wrap: wrap ;
    justify-content: space-between ;

    @media(min-width: 767px) {
        display: flex ;
        flex-wrap: wrap ;
        margin-bottom: 0;
        width: 370px;
        height: auto ;
        align-items: center;
    }

`;

const  InputContainer = (props) => {
    return <StyeledContainer {...props}/>
}

export default InputContainer;