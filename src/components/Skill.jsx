
import styled from 'styled-components';

import BoxWrapper from './BoxComponent'
import Title from './Title';
// mobile first apporch 

const StyledSkill = styled.div`
width:100vw;
 marign: 30px;
height:content-fit;
padding: 30px;
  gap: 30px;
display:flex;
flex-direction:column;
`;

const UnorderList = styled.ul`
list-style:none;
`
const ListItem = styled.li`
display:flex;
gap:10px;
align-items:center;

`
import ProgresBar from './ProgressBar';
export default function Skill(){


	return (<StyledSkill>
		<BoxWrapper $backgroundColor={"#f5f5f7"}>

		<Title>Frontend Skill</Title>
			
		<UnorderList>
			<ListItem>
				
				<p>HTML</p>
				<div>
				<h3>intermediate</h3>
				<p>progress here</p>
				</div>

			</ListItem>
		</UnorderList>
		</BoxWrapper>
		<BoxWrapper $backgroundColor={"#000"}></BoxWrapper>
			
			

	</StyledSkill>)
}