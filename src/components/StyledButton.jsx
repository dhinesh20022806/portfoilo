import styled from 'styled-components';

const StyledButton = styled.button`
background-color : ${({$backgroundColor}) => $backgroundColor || '#fff'};
color:${({$color}) => $color || '#000'};
padding:10px 20px;
border-radius:${({$borderRadius}) => `${$borderRadius}px` || '3px' };
border:none;



`;

export default StyledButton;