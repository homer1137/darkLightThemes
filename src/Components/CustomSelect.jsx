import styled from 'styled-components'
import Select from 'react-select';




export const CustomSelect = styled(Select).attrs(
    {
        styles:{
            control: (provided)=>({
                ...provided,
                background: 'var(--colors-ui-base)',
                padding: '0.25rem',
                border: `${props => props.border || '22px solid  green'}`,
                height: '50px',
    
                
    

            }),
            option: (provided, state)=>(
               {
                    ...provided,
                    
               } 
            ),
        }
    }
)`
    width: 200px;
    background-color:${props=>props.theme.colorsUiBase} ;
    font-size: 1rem;
    color: ${props=>props.theme.fontColor};
    & * {
        background-color:${props=>props.theme.colorsUiBase};
    font-size: 1rem;
    color: ${props=>props.theme.fontColor};
    & * {
        background-color:${props=>props.theme.colorsUiBase} ;
    font-size: 1rem;
    color: ${props=>props.theme.fontColor};
    
    }

    & > div {
        background-color:${props=>props.theme.colorsUiBase};
    font-size: 1rem;
    color: ${props=>props.theme.fontColor};
    }
` 