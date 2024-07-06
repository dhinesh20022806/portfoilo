
import styled from 'styled-components';
import BoxWrapper from './BoxComponent';
import Title from './Title'
import ReactQuizImage from '../assets/images/project_images/reactQuiz.png'

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

const ProjectImage = styled.img`
width:100%;

`;
export default function Project(){
	return (<ProjectSection id="projects">
		<BoxWrapper $backgroundColor={"#f5f5f7"} $display={'flex'} $gap={30}  $flexDirection={'column'} $justifyContent={"center"} $alignItems={"center"} >

		<ProjectImage src={ReactQuizImage} alt="project-title" />

		<Title>React Quiz App </Title>

		<ButtonWrapper> 
			<button>
				<a target="_blank" href="https://quiz-app-f2d1b.web.app/"> Preview </a>
			</button>
			<button>
				
				<a target="_blank" href="https://github.com/dhinesh20022806/quiz-app.git">Github code </a>
			</button>
		 </ButtonWrapper>
		</BoxWrapper>
		
	</ProjectSection>)
}