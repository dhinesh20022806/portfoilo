
import styled from 'styled-components';

import BoxWrapper from './BoxComponent'
import Title from './Title';
import SkillItem from './SkillItem';
// mobile first apporch 

const StyledSkill = styled.div`
font-size:1.6rem;
width:100vw;
 marign: 30px;
height:content-fit;
padding: 30px;
  gap: 30px;
display:flex;
flex-direction:column;

@media(min-width:1280px){
	flex-direction:row;
}


`;

const UnorderList = styled.ul`
list-style:none;
display:flex;
flex-direction:column;
gap:30px;
`




import ProgresBar from './ProgressBar';
export default function Skill(){


	return (<StyledSkill>
		<BoxWrapper $gap={30} $backgroundColor={"#f5f5f7"} $display={"flex"} $flexDirection={'column'} $justifyContent={"center"} $alignItems={'center'} >

		<Title>Frontend Skill</Title>
			
		<UnorderList>
		<SkillItem skill={'Html'} level="Advance" score={95} />
		<SkillItem skill={'css'} level="intermedite" score={85} />
		<SkillItem skill={'js'} level="intermedite" score={75} />
		<SkillItem skill={'React'} level="intermedite" score={80} />
			
		</UnorderList>
		</BoxWrapper>
		
		<BoxWrapper $gap={30}   $backgroundColor={"#f5f5f7"} $display={"flex"} $flexDirection={'column'} $justifyContent={"center"} $alignItems={'center'} >

		<Title>Backend Skill</Title>
			
		<UnorderList>
		<SkillItem skill={'Node'} level="intermedite" score={65} />
		<SkillItem skill={'Express'} level="intermedite" score={50} />
		<SkillItem skill={'Postgres'} level="beginner" score={40} />
		<SkillItem skill={'Python'} level="beginner" score={45} />
			
		</UnorderList>
		</BoxWrapper>
			

			
			

	</StyledSkill>)
}