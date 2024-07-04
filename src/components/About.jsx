import React from "react";
import styled from "styled-components";

import BoxWrapper from "./BoxComponent";
import Bold from './Bold'

import dhineshImg from '../assets/images/dhinesh.png';

const AboutWrapper = styled.div`
  marign: 30px;
  width: 100%;
  height: fit-content;
  display: flex;
  padding: 30px;
  gap: 30px;

  @media (max-width:1280px){
    flex-direction:column;
  }
`;

const Title = styled.h1`
font-family:'SF Pro Display', Arial, sans-serif;
letter-spacing:-.125rem;
font-size:2.8rem;
font-weight:600;
margin:10px 0;
`;

const Paragraph = styled.p`
font-family:'SF Pro Text', sans-serif;
color:var(--gray-text-color);
font-size:1.8rem;
font-weight:400;
line-height:1.2;
word-spacing:3px;
`;

const Content = styled.ul`
list-style:none;
display:flex;
flex-direction:column;
gap:50px;
`;

const Figure = styled.figure`
display:flex;
justify-content:center;
object-fit:contain;
overflow:hidden;
width:100%;
height:100%;
`;

const About = () => {
  return (
    <AboutWrapper id="about">
      <BoxWrapper $backgroundColor={"#f5f5f7"}>
        <Title>About me</Title>

        <Content>
        
        <li>
          
             <Paragraph>
 Hello, I'm <Bold> Dhinesh</Bold>, a passionate <Bold>Front End Developer</Bold> with a strong focus on creating <Bold>intuitive and dynamic user experiences</Bold>.
  I have a solid background in <Bold>JavaScript and React.js</Bold>, 
  and I'm also gaining expertise in <Bold>backend development</Bold>. My dedication lies in building <Bold>efficient and innovative web applications</Bold>.
        </Paragraph>
        </li>
        <li>
          <Paragraph>
        My journey in <Bold>web development</Bold> started with a keen interest in crafting <Bold>visually appealing and highly functional websites</Bold>.
         Over the years, I have honed my skills in React.js, enabling me to develop <Bold>robust and scalable applications</Bold>. 
         I continually learn and keep up with the latest industry trends to ensure that my work is <Bold>modern and impactful</Bold>.
        </Paragraph>
          

        </li>
        <li>
          
        <Paragraph>
        I am currently seeking a challenging role as a <Bold>React Developer / Front End Developer</Bold> where I can use my skills to contribute to <Bold>exciting projects</Bold> and grow within a <Bold>dynamic team</Bold>. 
        My goal is to deliver top-notch web solutions that not only meet but exceed <Bold> user expectations</Bold>.
        </Paragraph>
        </li>
        <li>
          
<Paragraph>When I'm not coding, you can find me <Bold>exploring new technologies</Bold>, reading about the <Bold>latest advancements in web development</Bold>, or experimenting with <Bold>new frameworks and libraries</Bold>.</Paragraph>

        </li>
        <li>
          


<Paragraph>I am excited about the opportunity to bring <Bold>my expertise and enthusiasm</Bold> to your team!
        </Paragraph>
        </li>

        </Content>
     

      






      </BoxWrapper>

      <BoxWrapper $backgroundColor={"#000"} $color={"#fff"} >
        <Figure>
        <img src={dhineshImg} alt='dhinesh'/>
        </Figure>
      </BoxWrapper>
    </AboutWrapper>
  );
};

export default About;
