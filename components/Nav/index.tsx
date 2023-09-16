import { FC, useState } from "react";
import { NAV_LINKS } from "./mocData";
import {
  Ul,
  Li,
  Img,
  Wrapper,
  Menu,
  Button,
  Open,
  Close,
  CustomLink,
  WrapperAnimation,
  Languages,
  ButtonLanguage,
  Background,
} from "./style";
import { useTranslation } from "react-i18next";
import AnimationLink from "@/components/AnimationLink";
import i18n from "i18next";

const Nav: FC = () => {
  const { t } = useTranslation();
  const [isShowMenu, setIsShowMenu] = useState<boolean>(true);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Ul>
        {NAV_LINKS &&
          NAV_LINKS.map((link: string, index: number) => (
            <Li key={index}>{t(link)}</Li>
          ))}
      </Ul>
      <Wrapper>
        <Img
          src="mobile-location.png"
          alt="Mobile location"
          title="Mobile location"
        />
        <Button onClick={() => setIsShowMenu((prevState) => !prevState)}>
          {isShowMenu ? <Open>☰</Open> : <Close>╳</Close>}
        </Button>
        <Menu active={isShowMenu}>
          <Background src="background.png" alt="Background" title="Background" />
          {NAV_LINKS.map((link: string, index: number) => (
            <CustomLink href="/" key={index}>
              {t(link)}
            </CustomLink>
          ))}
          <WrapperAnimation>
            <AnimationLink text={"map-mall"} />
          </WrapperAnimation>
          <Languages>
            <ButtonLanguage onClick={() => changeLanguage("ro")}>
              RO
            </ButtonLanguage>
            <ButtonLanguage onClick={() => changeLanguage("ru")}>
              RU
            </ButtonLanguage>
            <ButtonLanguage onClick={() => changeLanguage("en")}>
              EN
            </ButtonLanguage>
          </Languages>
        </Menu>
      </Wrapper>
    </>
  );
};

export default Nav;
