import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

const StyledProgress = styled.progress`
width:100%;
background-color:var(--gray-text-color);
border-radius:4px;

`;
export default function ProgressBar({score}){




	return (<StyledProgress value={score} max={100} ></StyledProgress>)
}