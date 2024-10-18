import { CgWebsite } from "react-icons/cg";
import { DiGithubAlt } from "react-icons/di";
import { MyDetails } from "../data/constant";

function Footer() {
  return (
    <div className="container-fluid bg-dark background-color-dark  text-color-light footer-container background-color-dark">
      <div className="">
        © 2024 Developed & Managed with <span>❤️</span> by{" "}
        <a
          href={MyDetails.portfolioWebsite}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          Kawal Jain
        </a>
        . All rights reserved.
      </div>
      <div className="">
        <a href={MyDetails.githubRepo} target="_blank" rel="noreferrer">
          <DiGithubAlt size={25} className="text-color-light" />
        </a>
        <a href={MyDetails.portfolioWebsite} target="_blank" rel="noreferrer">
          <CgWebsite size={25} className="text-color-light" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
