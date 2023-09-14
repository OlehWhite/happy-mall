import { FC } from "react";
import { Container, WrapperLogo, Title, Logo, WrapperLink } from "./style";
import CinemasAndLoaders from "@/components/HappyCinema/CinemasAndLoaders";
import Movies from "@/components/HappyCinema/Movies";
import AnimationLink from "@/components/AnimationLink";
import { useTranslation } from "react-i18next";

const HappyCinema: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <WrapperLogo>
        <Logo src="happy-cinema.png" alt="Happy cinema" title="Happy cinema" />
        <Title>{t("happy-cinema.title")}</Title>
      </WrapperLogo>
      <CinemasAndLoaders />
      <Movies />
      <WrapperLink>
        <AnimationLink text={"happy-cinema.website"} />
      </WrapperLink>
    </Container>
  );
};

export default HappyCinema;
