import { FC } from "react";
import { Container, LogoImg } from "components/Logo/style";

const Logo: FC = () => {
  return (
    <Container>
      <LogoImg src="logo.png" alt="Logo" title="Logo" />
    </Container>
  );
};

export default Logo;
