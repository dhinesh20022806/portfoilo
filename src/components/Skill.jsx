
import styled from 'styled-components';

import BoxWrapper from './BoxComponent'
import Title from './Title';
import ProgressBar from './ProgressBar'
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

& div:first-child{
	flex:.2;
}

& div:last-child{
	flex:.8;
}
`;



import ProgresBar from './ProgressBar';
export default function Skill(){


	return (<StyledSkill>
		<BoxWrapper $backgroundColor={"#f5f5f7"}>

		<Title>Frontend Skill</Title>
			
		<UnorderList>
			<ListItem>
				
				<div>HTML</div>
				<div>
				<h3>intermediate</h3>
				<p>
					<ProgressBar score={80}/>
				</p>
				</div>

			</ListItem>
		</UnorderList>
		</BoxWrapper>
		<BoxWrapper $backgroundColor={"#000"}></BoxWrapper>
			
			

	</StyledSkill>)
}