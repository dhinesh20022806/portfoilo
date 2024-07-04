import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

const StyledProgress = styled.progress`
transition: all 0.5s ease-in-out;

`;
export default function ProgressBar({score}){

	const [increaseTime, setIncreaseTime] = useState(0);

	const intervalRef = useRef();

	useEffect(()=>{
			if(increaseTime < score){
			intervalRef.current = setInterval(()=>{
				setIncreaseTime(prev => prev + 10)
		}, 1000)
		}


return ()=>{
	console.log('outer scope fired')
	if(increaseTime => score){
		clearInterval(intervalRef.current)
		console.log('fired')
	}
}

	},[score, increaseTime])

console.log(increaseTime)

 


	return (<progress value={increaseTime} max={100} ></progress>)
}