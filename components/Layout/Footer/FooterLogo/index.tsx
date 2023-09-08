import { FC } from "react";
import { Container, LogoImg } from "/components/Layout/Footer/FooterLogo/style";

const FooterLogo: FC = () => {
  return (
    <Container>
      <LogoImg src="footer-logo.png" alt="Footer logo" title="Footer logo" />
    </Container>
  );
};

export default FooterLogo;
