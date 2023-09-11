import { FC, useRef, useState } from "react";
import {
  Container,
  WrapperBackground,
  Background,
  WrapperLogo,
  Logo,
  Title,
  Wrapper,
  Menu,
  Img,
  WrapperImage,
  ButtonLeft,
  ButtonRight,
  WrapperLeft,
  WrapperRight,
  TitleInfo,
  WrapperInfoBlock,
  Text,
  Line,
} from "./style";
import { BLOCKS, DATA } from "@/components/Adventica/data";
import Slider from "react-slick";
import { Box } from "@mui/system";
import { styled } from "@mui/material";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: -10,
  swipe: false,
  arrows: false,
};

const CustomSlider = styled(Slider)(() => ({
  ".slick-slide": {
    position: "relative",
    transition: "transform 0.3s ease",
    zIndex: 1,
    marginRight: -2,
  },

  ".slick-list": {
    height: 570,
    paddingTop: "168px !important",
  },

  ".slick-slide.slick-center": {
    position: "relative",
    left: -110,
    zIndex: 10,
    transform: "scale(1.6)",
  },

  ".slick-slide:not(.slick-center)": {
    transform: "scale(0.97)",
    transition: "transform 0.3s ease",
  },
}));

const Adventica: FC = () => {
  const [activeBtn, setActiveBtn] = useState<number>(0);
  const [sortEvents, setSortEvents] = useState<string>("КАРТИНГ");
  const ref = useRef<Slider | null>(null);

  const handleButtonClick = (index: number, event: string): void => {
    setActiveBtn(index);
    setSortEvents(event);
  };

  const onNext = (): void => {
    ref.current?.slickNext();
  };

  const onPrev = (): void => {
    ref.current?.slickPrev();
  };

  return (
    <Container>
      <WrapperBackground>
        <Background
          src="background-2.png"
          alt="Background"
          title="Background"
        />
      </WrapperBackground>
      <WrapperLogo>
        <Logo src="adventica.png" alt="Adventica" title="Adventica" />
        <Title>Центр для всей семьи</Title>
      </WrapperLogo>
      <Wrapper>
        {DATA.map((menu, index) => (
          <Wrapper key={index}>
            <Menu
              onClick={() => handleButtonClick(index, menu.title)}
              active={activeBtn === index}
            >
              {menu.title}
            </Menu>
            {index < DATA.length - 1 && (
              <Img src="load.png" alt="Load" title="Load" />
            )}
          </Wrapper>
        ))}
      </Wrapper>
      <Box>
        <WrapperLeft>
          <ButtonLeft onClick={onPrev}>
            <Img src="left.png" alt="Arrow left" title="Arrow left" />
          </ButtonLeft>
        </WrapperLeft>
        <CustomSlider ref={ref} {...settings}>
          {BLOCKS.map((img, index) => (
            <WrapperImage key={index}>
              <Img src={img.img} alt={img.title} title={img.title} />
            </WrapperImage>
          ))}
        </CustomSlider>
        <WrapperRight>
          <ButtonRight onClick={onNext}>
            <Img src="right.png" alt="Arrow right" title="Arrow right" />
          </ButtonRight>
        </WrapperRight>
      </Box>
      {DATA.map(
        (block, index) =>
          sortEvents === block.title && (
            <WrapperInfoBlock key={index}>
              <TitleInfo>{block.title}</TitleInfo>
              <Line />
              <Text>{block.text}</Text>
            </WrapperInfoBlock>
          )
      )}
    </Container>
  );
};

export default Adventica;
