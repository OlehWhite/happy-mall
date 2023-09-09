import { FC } from "react";
import LanguageAndMapMall from "@/components/LanduageAndMapMall";
import { HeaderBlock } from "./style";
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";

const Header: FC = () => {
  return (
    <HeaderBlock>
      <Logo currentWidth={84} />
      <Nav />
      <LanguageAndMapMall />
    </HeaderBlock>
  );
};

export default Header;
