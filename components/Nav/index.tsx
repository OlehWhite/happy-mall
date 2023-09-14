import { FC } from "react";
import { NAV_LINKS } from "./mocData";
import { Ul, Li } from "./style";
import { useTranslation } from "react-i18next";

const Nav: FC = () => {
  const { t } = useTranslation();

  return (
    <Ul>
      {NAV_LINKS &&
        NAV_LINKS.map((link, index) => <Li key={index}>{t(link)}</Li>)}
    </Ul>
  );
};

export default Nav;
