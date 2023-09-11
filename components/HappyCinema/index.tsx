import { FC } from "react";
import {
  Container,
  WrapperLogo,
  Title,
  Logo,
  Link,
  WrapperLink,
  Img,
} from "./style";
import CinemasAndLoaders from "@/components/HappyCinema/CinemasAndLoaders";
import Movies from "@/components/HappyCinema/Movies";

const HappyCinema: FC = () => {
  return (
    <Container>
      <WrapperLogo>
        <Logo src="happy-cinema.png" alt="Happy cinema" title="Happy cinema" />
        <Title>Современный кинотеатр</Title>
      </WrapperLogo>
      <CinemasAndLoaders />
      <Movies />
      <WrapperLink>
        <Img src="icon.png" alt="Icon" title="Icon" />
        <Link>ПЕРЕЙТИ НА САЙТ</Link>
      </WrapperLink>
    </Container>
  );
};

export default HappyCinema;
