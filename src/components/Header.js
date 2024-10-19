import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { TbEyeCheck } from "react-icons/tb";
import { MyDetails, SVG_ICON_SIZE } from "../data/constant";
import IconWrapper from "./IconWrapper";

const Header = ({ handleEditorViewMobile, setHandleEditorViewMobile }) => {
  return (
    <div className="nav-main-container">
      <div className="container">
        <div className="nav-container">
          <div className="nav-logo-container">
            <h1 className="text-color-primary">Markdown Parser</h1>
          </div>
          <div
            className={`mobile-icon-container ${
              handleEditorViewMobile ? "selected" : " "
            }`}
            onClick={() => {
              setHandleEditorViewMobile(!handleEditorViewMobile);
            }}
          >
            <TbEyeCheck size={SVG_ICON_SIZE} className="active" />
          </div>

          <div className="header-icon-container">
            <IconWrapper Icon={BsGithub} href={MyDetails.githubRepo} />
            <IconWrapper Icon={CgWebsite} href={MyDetails.portfolioWebsite} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
