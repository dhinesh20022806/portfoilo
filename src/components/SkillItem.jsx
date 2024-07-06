
import styled from 'styled-components';
import ProgressBar from './ProgressBar'


const ListItem = styled.li`
display:flex;
gap:30px;
align-items:center;
text-transform:uppercase;

& div:first-child{
	width:100px;
	font-weight:bold;
	font-size:2rem;

}

& div:last-child{
	flex:.8;

}
`;

export default function SkillItem({skill, level, score}){
	return (<ListItem>
				<div>{skill}</div>
				<div>
				<h3>{level}</h3>
				<p>
					<ProgressBar score={score}/>
				</p>
				</div>
			</ListItem>)
}