import styled from 'styled-components'
import { Container } from './container'
const Wrapper =styled.main`
    padding: 2rem 0;
    
    @media(min-width: 767px){
        pagging: 4rem 0;
    }
`

export const Main=({children})=>{

    return (
        <Wrapper>
            <Container>
                {children}
            </Container>
        </Wrapper>
    )
}
