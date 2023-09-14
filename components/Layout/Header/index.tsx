import { FC } from "react";
import LanguageAndMapMall from "@/components/LanduageAndMapMall";
import { HeaderBlock, Container } from "./style";
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";

const Header: FC = () => {
  return (
    <Container>
      <HeaderBlock>
        <Logo />
        <Nav />
        <LanguageAndMapMall />
      </HeaderBlock>
    </Container>
  );
};

export default Header;
