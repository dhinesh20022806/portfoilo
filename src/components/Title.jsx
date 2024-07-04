import styled from 'styled-components'

const Title = styled.h1`
font-size:4rem;
text-transform: capitalize;

@media (max-width:768px){
  font-size:3rem;
}

@media (max-width:640px){
  font-size:2rem;
}
`;


export default Title;