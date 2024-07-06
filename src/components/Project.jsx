
import styled from 'styled-components';
import BoxWrapper from './BoxComponent';
import Title from './Title'

const ProjectSection = styled.section`
width:100%;
height:fit-content;
display:flex;
flex-direction:column;
padding:30px;

`;

const ButtonWrapper = styled.div`
display:flex;
justify-content:space-between;
gap:30px;
`;
export default function Project(){
	return (<ProjectSection>
		<BoxWrapper $backgroundColor={"#f5f5f7"} $display={'flex'} $gap={30}  $flexDirection={'column'} $justifyContent={"center"} $alignItems={"center"} >

		<img src="" alt="project-title" />

		<Title>React Quiz App </Title>

		<ButtonWrapper> 
			<button>Preview</button>
			<button>Github code</button>
		 </ButtonWrapper>
		</BoxWrapper>
		
	</ProjectSection>)
}