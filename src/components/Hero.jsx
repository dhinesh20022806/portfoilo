import BoxWrapper from "./BoxComponent";
import styled from "styled-components";

import heroImg from "../assets/images/dhinesh.png";

import codingVideo from '../assets/video/coding2.mp4';
import Title from './Title'
const HeroWrapper = styled.div`
  position:relative;
  width: 100%;
  height: 80vh; /* Adjust to your needs */
  overflow: hidden;  
`;

const Video = styled.video`
 // position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color:rgba(0, 0, 0, 0.5);

  @media (max-width:1024px){
    object-fit:fill;
  }
`;

const OverLay = styled.div`
position:absolute;
z-index:1;
top:0;
left:0;
right:0;
bottom:0;
background-color:black;
opacity:0.44;
color:white;
`
const Content = styled.div`
position:absolute;
z-index:5;
top:0;
left:0;
right:0;
bottom:0;
color:white;
font-size:5.6rem;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const SubTitle = styled.h4`
font-size:1.4rem;
text-wrap:pretty;
text-align:center;
@media (max-width:768px){
  font-size:1.2rem;
}


`;

const Button = styled.button`
width:100px;
padding:5px 15px;
border-radius:15px;
background-color:transparent;
text-transform:capitalize;
color:#fff;  
outline:none;
transition:color 0.5s ease-in-out;
  &:hover{
    background-color: #fff;
    color:#000;
  }

`;

const Wrapper = styled.div`
margin-top:350px;
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
font-family:'SF Pro Display', Arial, sans-serif;
`;

const Hero = () => {
  document.querySelector('video')?.play();
  console.log(document.querySelector('video'))
  return (
    <HeroWrapper id="home">
    <Video  autoPlay loop muted>
    <source src={codingVideo} type="video/mp4" />
    </Video>

    <OverLay >
    </OverLay>

    <Content>
    <Wrapper>
    <Title>Crafting Robust Front end Solution</Title>
    <SubTitle>Optimizing user Experiences with Seamless Frontend and Backend integration.</SubTitle>
    <Button> resume</Button>
    </Wrapper>
    </Content>

        </HeroWrapper>
  );
};

export default Hero;

//       <BoxWrapper $backgroundColor={"#f5f5f7"}>
//         <figure>
//           <img src={heroImg} alt="dhinesh img" />
//         </figure>
//       </BoxWrapper>
