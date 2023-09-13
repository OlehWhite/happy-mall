import { FC } from "react";
import { Container, LogoImg } from "./style";

const Logo: FC = () => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <Container onClick={handleClick}>
      <LogoImg src="logo.png" alt="Logo" title="Logo" />
    </Container>
  );
};

export default Logo;
