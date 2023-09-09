import { FC } from "react";
import { Container, LogoImg } from "./style";

const Logo: FC = () => {
  return (
    <Container>
      <LogoImg src="logo.png" alt="Logo" title="Logo" />
    </Container>
  );
};

export default Logo;
