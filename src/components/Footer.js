import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

import { MyDetails } from "../data/constant";

import IconWrapper from "./IconWrapper";

function Footer() {
  return (
    <div className="footer-container">
      <div className="container footer-sub-container text-color-light  ">
        <div className="">
          © 2024 Developed & Managed with <span>❤️</span> by{" "}
          <a href={MyDetails.portfolioWebsite} target="_blank" rel="noreferrer">
            Kawal Jain
          </a>
          . All rights reserved.
        </div>
        <div className="">
          <IconWrapper Icon={BsGithub} href={MyDetails.githubRepo} />

          <IconWrapper Icon={CgWebsite} href={MyDetails.portfolioWebsite} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
