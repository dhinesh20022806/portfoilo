import styled from 'styled-components';
import BoxWrapper from './BoxComponent';
import Title from './Title'
import StyledButton from './StyledButton'

const StyledForm = styled.form`
display:flex;
flex-direction:column;
gap:10px;
justify-content:space-around;
align-items:center;


`;

const StyledInput = styled.input`
width:350px;
min-width:100%;
padding:10px;
border:none;

`;

const StyledTextarea = styled.textarea`
width:350px;
max-width:350px;
min-width:100%;
padding:10px;
border:none;

`;


export default function Contact(){
	return (<section id="contact">
		<BoxWrapper $backgroundColor={'var(--gray-color)'} $display={'flex'} $justifyContent={'center'} $alignItems={'center'} $flexDirection={'column'} >
		<Title>Send Email </Title>

		<StyledForm>
		<p>
		<StyledInput type='text' placeholder="Enter your email"/>
		</p>
		<p>
		<StyledInput type="text" placeholder="Subject"/>
		</p>
		<p>
		<StyledTextarea placeholder="Type your Query please..." ></StyledTextarea>
		</p>
		<StyledButton $backgroundColor={'var(--black-color)'} $color={'var(--gray-text-color)'} >Send me </StyledButton>
		</StyledForm>
		</BoxWrapper>
	</section>)
}