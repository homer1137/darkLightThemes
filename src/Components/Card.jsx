import styled from 'styled-components';
import { StyledKey, StyledValue } from './Style/text';

const Wrapper = styled.article`
    border-radius: var(--radii);
    border: ${props => props.border || 'none'};
    box-shadow: ${props=>props.theme.shadow};
    
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height:25rem ;
    margin: 0.5rem;
    color: ${props=>props.theme.fontColor};
    font-size: ${props => props.size || '24px'};
    background-color:${props=>props.theme.colorsUiBase};
    cursor: pointer;
    overflow: hidden;
    text-decoration: none ;
    transition-duration: 0.2s;
    &:hover {
        transform: scale(1.05);
    }

`;

const CardImage = styled.img`
    display: block ;
    max-width: 100%;
    object-fit: cover ;
    object-position: center ;
    height: auto;
   
`;

const CardBody = styled.div`
    padding: 1rem 1rem;
    text-decoration: none ;
`;

const CardTitle = styled.h3`
    margin: 0.5rem 0.5rem;
    text-decoration: none ;
    
`;

const CardList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 1rem 0 0;
    text-decoration: none ;

`;

const CardListItem = styled.li`
    line-height: 1.5rem ;
    text-decoration: none ;
`;
 


function Card ({img, name, info}) {

    return (
        <Wrapper>
            <CardImage/>
            <CardBody>
                
                <CardImage src={img} alt={'picture'}/>
                <CardTitle >{name}</CardTitle>
                <CardList>{info.map((item)=>{
                    return (
                        <CardListItem key={item.title}>
                            <StyledKey>{item.title}:</StyledKey> <StyledValue>{item.description}</StyledValue>
                        </CardListItem>
                    )
                })}</CardList>
            </CardBody>
        </Wrapper>
    )
}

export default Card;