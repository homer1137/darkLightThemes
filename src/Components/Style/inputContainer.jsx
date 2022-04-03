import styled from 'styled-components'

const StyeledContainer = styled.label`
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    border-radius: var(--radii);
    border: ${props => props.border || '22px solid  green'};
    box-shadow: ${props=>props.theme.shadow};
    width: 100%;
    margin-bottom: 1rem;
    color: ${props => props.color};
    font-size: ${props => props.size || '24px'};
    background-color:${props=>props.theme.colorsUiBase} ;

    @media(min-width: 767px) {
        margin-bottom: 0;
        width: 280px;
    }

`;

const  InputContainer = (props) => {
    return <StyeledContainer {...props}/>
}

export default InputContainer;