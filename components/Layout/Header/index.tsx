import { FC } from "react";
import { HeaderBlock } from "components/Layout/Header/style";
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
import LanguageAndMapMall from "@/components/LanduageAndMapMall";

const Header: FC = () => {
  return (
    <HeaderBlock>
      <Logo />
      <Nav />
      <LanguageAndMapMall />
    </HeaderBlock>
  );
};

export default Header;
