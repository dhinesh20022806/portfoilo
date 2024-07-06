
import styled from 'styled-components';
import BoxWrapper from './BoxComponent';

const ProjectSection = styled.section`
width:100%;
height:fit-content;
display:flex;
flex-direction:column;
padding:30px;

`;
export default function Project(){
	return (<ProjectSection>
		<BoxWrapper $backgroundColor={"#f5f5f7"} >

		First Project
		</BoxWrapper>
		
	</ProjectSection>)
}