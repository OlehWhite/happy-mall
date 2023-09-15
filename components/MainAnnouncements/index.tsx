import { FC, useRef, useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Menu,
  Img,
  Info,
  TitleInfo,
  Date,
  WrapperInfos,
  Text,
  WrapperTitle,
  AllAnons,
  ButtonLeft,
  ButtonRight,
  WrapperLeft,
  WrapperRight,
  ImgInfo,
} from "./style";
import { BLOCKS, MENUS } from "@/components/MainAnnouncements/menu";
import Slider from "react-slick";
import AnimationLink from "@/components/AnimationLink";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";

const MainAnnouncements: FC = () => {
  const ref = useRef<Slider | null>(null);
  const [activeBtn, setActiveBtn] = useState<number>(0);
  const [sortEvents, setSortEvents] = useState<string>("main-anons.all-anons");
  const { t } = useTranslation();
  const isWideScreen = useMediaQuery("(min-width:375px)");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isWideScreen ? 4 : 1,
    slidesToScroll: isWideScreen ? 2 : 1,
    arrows: false,
    useTransform: false,
  };

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
      <Title>{t("main-anons.title")}</Title>
      <Wrapper>
        {MENUS.map((menu, index) => (
          <Wrapper key={index}>
            <Menu
              onClick={() => handleButtonClick(index, menu.title)}
              active={activeBtn === index}
            >
              {t(menu.title)}
            </Menu>
            {index < MENUS.length - 1 && (
              <Img src="load.png" alt="Load" title="Load" />
            )}
          </Wrapper>
        ))}
      </Wrapper>
      <WrapperInfos>
        <WrapperLeft>
          <ButtonLeft onClick={onPrev}>
            <Img src="left.png" alt="Arrow left" title="Arrow left" />
          </ButtonLeft>
        </WrapperLeft>
        <Slider className="custom-slider-main-anons" ref={ref} {...settings}>
          {BLOCKS.filter(
            (block) =>
              t(sortEvents) === "ВСЕ АНОНСЫ" ||
              t(sortEvents) === "ALL ANNOUNCES" ||
              t(sortEvents) === "TOATE ANUNȚURILE" ||
              t(block.title) === t(sortEvents)
          ).map((block, index) => (
            <Info key={index}>
              <ImgInfo src={block.img} alt={block.title} title={block.title} />
              <WrapperTitle>
                <Img src={block.icon} alt={block.title} title={block.title} />
                <TitleInfo>{t(block.title)}</TitleInfo>
              </WrapperTitle>
              <Text>{t(block.text)}</Text>
              <Date>{block.date}</Date>
            </Info>
          ))}
        </Slider>
        <WrapperRight>
          <ButtonRight onClick={onNext}>
            <Img src="right.png" alt="Arrow right" title="Arrow right" />
          </ButtonRight>
        </WrapperRight>
      </WrapperInfos>
      <AllAnons>
        <AnimationLink text={"main-anons.all-anons"} />
      </AllAnons>
    </Container>
  );
};

export default MainAnnouncements;
