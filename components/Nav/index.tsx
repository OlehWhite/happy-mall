import { FC } from "react";
import { NAV_LINKS } from "components/Nav/mocData";
import { Ul, Li } from "components/Nav/style";

const Nav: FC = () => {
  return (
    <Ul>
      {NAV_LINKS && NAV_LINKS.map((link, index) => <Li key={index}>{link}</Li>)}
    </Ul>
  );
};

export default Nav;
