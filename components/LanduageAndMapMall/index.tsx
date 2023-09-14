import { FC } from "react";
import { Container } from "./style";
import Language from "@/components/LanduageAndMapMall/Language";
import AnimationLink from "@/components/AnimationLink";

const LanguageAndMapMall: FC = () => {
  return (
    <Container>
      <Language />
      <AnimationLink text={"map-mall"} />
    </Container>
  );
};

export default LanguageAndMapMall;
