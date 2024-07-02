import { useState } from "react";
import styled, { keyframes } from "styled-components";

// animation keyframes
const animateLine1 = keyframes`
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(0, 13px, 0) rotate(0);
  }
  100% {
    transform: translate3d(0, 13px, 0) rotate(45deg);
  }
`;

const animateLine2 = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const animateLine3 = keyframes`
   0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(0, -13px, 0) rotate(0);
  }
  100% {
    transform: translate3d(0, -13px, 0) rotate(135deg);
  }
`;

const animateLine1Rev = keyframes`
 0% {
    transform: translate3d(0, 13px, 0) rotate(45deg);
  }
  50% {
    transform: translate3d(0, 13px, 0) rotate(0);
  }
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
`;

const animateLine2Rev = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const animateLine3Rev = keyframes`
 0% {
    transform: translate3d(0, -13px, 0) rotate(135deg);
  }
  50% {
    transform: translate3d(0, -13px, 0) rotate(0);
  }
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
`;

// Styled components
const StyledNav = styled.nav`
  background-color: var(--black-color);
  padding: 15px 20px;
  font-family: "SF Pro Display";
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const StyledUL = styled.ul`
  display: flex;
  justify-content: space-around;
  font-family: "SF Pro Display";
  text-align: center;
  font-size: 1.6rem;
  text-transform: uppercase;
  list-style: none;

  & li a {
    color: var(--gray-color);
    padding: 5px;
    text-decoration: none;
  }
  & li a:hover,
  & li a:focus {
    color: #fff;
    cursor: pointer;
    background-color: #28282b;
  }

  @media (max-width: 768px) {
    position: absolute;
    z-index: ${({ $active }) => ($active ? "100" : "-1")};
    flex-direction: column;
    justify-content: start;
    height: ${({ $active }) =>
      $active ? "92.7vh" : "0vh"};
    visibility: ${({ $active }) =>
      $active ? "visible" : "hidden"};
    background-color: #000;
    top: 99%;
    left: 0%;
    width: 100vw;
    align-items: start;
    padding-left: 20px;
    gap: 20px;
    transition: all 0.5s ease-in-out;
  }
`;

const StyledFlex = styled.div`
  flex: 1;
`;

const NavLinks = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    display: flex;
    justify-content: end;
  }
`;

const Logo = styled.p`
  font-size: 3.5rem;
  text-transform: uppercase;
`;

const MenuIcon = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    border: none;
    width: 50px;
    height: 26px;
    cursor: pointer;
    justify-self: flex-end;
    background: none;

    & .line-1,
    & .line-2,
    & .line-3 {
      height: 6px;
      width: 100%;
      background-color: #fff;
      border-radius: 3px;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
      transition: background-color 0.2s ease-in-out;
    }

    & .line-1 {
      animation: ${(props) =>
          props.$active ? animateLine1 : animateLine1Rev}
        0.7s ease-in-out forwards;
    }

    & .line-2 {
      margin: 7px 0px;
      animation: ${(props) =>
          props.$active ? animateLine2 : animateLine2Rev}
        0.7s ease-in-out forwards;
    }

    & .line-3 {
      animation: ${(props) =>
          props.$active ? animateLine3 : animateLine3Rev}
        0.7s ease-in-out forwards;
    }
  }
`;

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleNavButton = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <StyledNav>
      <StyledFlex>
        <Logo>Dhinesh</Logo>
      </StyledFlex>
      <NavLinks>
        <StyledUL $active={isActive}>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="skill">Skill</a>
          </li>
          <li>
            <a href="projects">Projects</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </StyledUL>
        <MenuIcon
          onClick={handleToggleNavButton}
          $active={isActive}
        >
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </MenuIcon>
      </NavLinks>
    </StyledNav>
  );
};

export default Navbar;
