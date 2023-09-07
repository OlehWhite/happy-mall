import { FC } from "react";
import { Container } from "@/components/LanduageAndMapMall/style";
import Language from "@/components/LanduageAndMapMall/Language";
import MapMall from "@/components/LanduageAndMapMall/MapMall";

const LanguageAndMapMall: FC = () => {
  return (
    <Container>
      <Language />
      <MapMall />
    </Container>
  );
};

export default LanguageAndMapMall;
