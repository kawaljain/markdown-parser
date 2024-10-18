import { SVG_ICON_SIZE } from "../data/constant";

function IconWrapper({ Icon, href, children = <></> }) {
  return (
    <a className="pl-10" href={href} target="_blank" rel="noreferrer">
      <Icon size={SVG_ICON_SIZE} className="text-color-light" />
    </a>
  );
}

export default IconWrapper;
