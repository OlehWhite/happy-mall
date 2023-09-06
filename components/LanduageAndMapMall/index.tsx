import { FC } from "react";
import Language from "@/components/Language";
import MapMall from "@/components/MapMall";
import { Container } from "@/components/LanduageAndMapMall/style";

const LanguageAndMapMall: FC = () => {
  return (
    <Container>
      <Language />
      <MapMall />
    </Container>
  );
};

export default LanguageAndMapMall;
