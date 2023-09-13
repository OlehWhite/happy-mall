import { FC } from "react";
import { Container, WrapperLogo, Title, Logo, WrapperLink } from "./style";
import CinemasAndLoaders from "@/components/HappyCinema/CinemasAndLoaders";
import Movies from "@/components/HappyCinema/Movies";
import AnimationLink from "@/components/AnimationLink";

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
        <AnimationLink text={"ПЕРЕЙТИ НА САЙТ"} />
      </WrapperLink>
    </Container>
  );
};

export default HappyCinema;
