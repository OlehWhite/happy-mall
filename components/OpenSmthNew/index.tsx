import { FC } from "react";
import { Container, Title, Line, Background } from "./style";
import LargestFashionGallery from "./LargestFashionGallery";
import HomeAndSoul from "@/components/OpenSmthNew/HomeAndSoul";
import BeautyAndTenderness from "@/components/OpenSmthNew/BeautyAndTenderness";
import Vacation from "@/components/OpenSmthNew/Vacation";

const OpenSmthNew: FC = () => {
  return (
    <Container>
      <Background src="background.png" alt="Background" title="Background" />
      <Title>Открывай что-то новое</Title>
      <Line />
      <LargestFashionGallery />
      <HomeAndSoul />
      <BeautyAndTenderness />
      <Vacation />
    </Container>
  );
};

export default OpenSmthNew;
