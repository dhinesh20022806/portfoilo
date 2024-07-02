import styled from "styled-components";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
import EmailIcon from "@mui/icons-material/Email";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 50px;
  background-color: #000;
  padding-top: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 0 auto;

  & a {
    color: #fff;
  }

  & a:hover {
    color: var(--gray-color);
  }
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <a
          href="https://github.com/dhinesh20022806"
          target="_blank"
        >
          <GitHubIcon color="inherit" fontSize="large" />
        </a>
        <a
          href="https://www.linkedin.com/in/dhinesha28/"
          target="_blank"
        >
          <LinkedInIcon fontSize="large" color="inherit" />
        </a>
        <a
          href="https://www.instagram.com/dhinesh_28_/"
          target="_blank"
        >
          <InstagramIcon fontSize="large" color="inherit" />
        </a>
        <a
          href="https://www.reddit.com/user/Dhinesh_28_/"
          target="_blank"
        >
          <RedditIcon fontSize="large" color="inherit" />
        </a>
        <a
          href="mailto:dhinesh20022806@gmail.com"
          target="_blank"
        >
          <EmailIcon fontSize="large" color="inherit" />
        </a>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;
