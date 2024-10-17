import { BsEyeFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { DiGithubAlt } from "react-icons/di";

function Header() {
  return (
    <nav
      className="navbar   navbar-expand-xxl navbar-dark bg-dark"
      aria-label="Second navbar example"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Markdown Parser
        </a>

        <a
          className="navbar-toggler"
          href="https://github.com/kawaljain"
          target="_blank"
          rel="noreferrer"
        >
          <DiGithubAlt size={25} />
        </a>
        <a
          className="navbar-toggler"
          href="https://kawaljain.com/"
          target="_blank"
          rel="noreferrer"
        >
          <CgWebsite size={25} />
        </a>

        <button className="navbar-toggler">
          <BsEyeFill size={25} />
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarsExample02"
          style={{ justifyContent: "flex-end" }}
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a
                className="nav-link "
                href="https://github.com/kawaljain"
                target="_blank"
                rel="noreferrer"
              >
                <DiGithubAlt size={25} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://kawaljain.com/"
                target="_blank"
                rel="noreferrer"
              >
                <CgWebsite size={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
