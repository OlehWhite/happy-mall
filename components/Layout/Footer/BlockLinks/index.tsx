import { FC } from "react";
import {
  B,
  Img,
  PrivacyPolicy,
  Text,
  WrapperImg,
  WrapperLinks,
  WrapperText,
  Container,
  Link,
} from "@/components/Layout/Footer/BlockLinks/style";
import IMGInstagram from "public/instagram.png";
import IMGFacebook from "public/facebook.png";
import IMGTiktok from "public/tiktok.png";
import FooterLogo from "@/components/Layout/Footer/FooterLogo";

const links = [
  {
    logo: IMGInstagram.src,
    name: "Instagram",
    link: "https://www.instagram.com/",
  },
  { logo: IMGFacebook.src, name: "Facebook", link: "https://facebook.com/" },
  { logo: IMGTiktok.src, name: "Tiktok", link: "https://www.tiktok.com/" },
];

const BlockLinks: FC = () => {
  return (
    <Container>
      <FooterLogo />
      <WrapperLinks>
        {links.map((link, index) => (
          <Link key={index} href={link.link} target="_blank">
            <WrapperImg>
              <Img src={link.logo} alt={link.name} title={link.name} />
            </WrapperImg>
          </Link>
        ))}
      </WrapperLinks>
      <PrivacyPolicy>
        <Text>Политика конфиденциальности</Text>
        <WrapperText>
          <Text>© 2023 Happy Mall</Text>
          <Text>
            Designed & Developed by <B>Rossery</B>
          </Text>
        </WrapperText>
      </PrivacyPolicy>
    </Container>
  );
};

export default BlockLinks;
