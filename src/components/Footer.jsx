import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <footer className="flex bg-primary py-10  justify-center gap-10 text-white ">
      <InstagramIcon
        fontSize="large"
        color="inherit"
        className="cursor-pointer"
      />
      <LinkedInIcon
        fontSize="large"
        color="inherit"
        className="cursor-pointer"
      />
      <GitHubIcon
        fontSize="large"
        color="inherit"
        className="cursor-pointer"
      />
    </footer>
  );
};

export default Footer;
