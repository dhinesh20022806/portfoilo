import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

const StyledProgress = styled.progress`
width:100%;
transition: all 0.5s ease-in-out;

`;
export default function ProgressBar({score}){




	return (<progress value={score} max={100} ></progress>)
}