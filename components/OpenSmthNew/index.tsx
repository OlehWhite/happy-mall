import { FC } from "react";
import { Container, Title, Line, Background, GlobalContainer } from "./style";
import LargestFashionGallery from "./LargestFashionGallery";
import HomeAndSoul from "@/components/OpenSmthNew/HomeAndSoul";
import BeautyAndTenderness from "@/components/OpenSmthNew/BeautyAndTenderness";
import Vacation from "@/components/OpenSmthNew/Vacation";

const OpenSmthNew: FC = () => {
  return (
    <GlobalContainer>
      <Background src="background.png" alt="Background" title="Background" />
      <Container>
        <Title>Открывай что-то новое</Title>
        <Line />
        <LargestFashionGallery />
        <HomeAndSoul />
        <BeautyAndTenderness />
        <Vacation />
      </Container>
    </GlobalContainer>
  );
};

export default OpenSmthNew;
