import React from "react";
import BoxWrapper from "./BoxComponent";
import styled from "styled-components";

const HeroWrapper = styled.div`
  height: 90vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper id="home">
      <BoxWrapper $backgroundColor={"#f5f5f7"}>
        <h1>Creafting Robust Frontend Solutions</h1>
        <h3>
          optimizing User Experience with seamless Frontend
          and backend integration.
        </h3>
        <button>
          <a>resume</a>
        </button>
      </BoxWrapper>
      <BoxWrapper $backgroundColor={"#f5f5f7"}></BoxWrapper>
    </HeroWrapper>
  );
};

export default Hero;
