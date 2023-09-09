import { FC } from "react";
import {
  Container,
  WrapperImg,
  Img,
  WrapperInfo,
  Title,
  Button,
} from "@/components/HowFindUs/style";
import Loader from "@/components/Loader";

const HowFindUs: FC = () => {
  return (
    <Container>
      <WrapperImg>
        <Img src="how-find-us-1920.png" alt="How Find Us" title="How Find Us" />
      </WrapperImg>
      <WrapperInfo>
        <Title>Доступная Роскошь</Title>
        <Button>Как нас найти</Button>
        <Loader />
      </WrapperInfo>
    </Container>
  );
};

export default HowFindUs;
