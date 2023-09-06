import { FC } from "react";
import { Container, WrapperMap, Text, Img } from "@/components/MapMall/style";

const MapMall: FC = () => {
  return (
    <Container>
      <WrapperMap>
        <Img src="icon.png" alt="Icon" title="Icon" />
      </WrapperMap>
      <Text>КАРТА МОЛЛА</Text>
    </Container>
  );
};

export default MapMall;
