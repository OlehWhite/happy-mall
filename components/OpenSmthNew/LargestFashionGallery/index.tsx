import { FC, useRef, useState } from "react";
import {
  Container,
  Title,
  Img,
  Block,
  WrapperTitle,
  Button,
  WrapperBlock,
  Cards,
  Card,
  ImgCad,
  Name,
  Box,
} from "./style";
import Slider from "react-slick";
import AnimationLink from "@/components/AnimationLink";
import { BTNS, CARDS_DATA } from "@/components/OpenSmthNew/data";
import { useTranslation } from "react-i18next";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  arrows: false,
  useTransform: false,
};

const LargestFashionGallery: FC = () => {
  const ref = useRef<Slider | null>(null);
  const [switcher, setSwitcher] = useState<boolean>(true);
  const [activeButton, setActiveButton] = useState<number>(0);
  const { t } = useTranslation();

  const clickChangeSwitcher = () => {
    setSwitcher((prevState) => !prevState);
  };

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <Container>
      <WrapperTitle>
        <Img src="load.png" alt="Load" title="Load" />
        <Title onClick={clickChangeSwitcher}>
          {t("open-smth-new.block-title")}
        </Title>
        <Img
          src={switcher ? "arrow-down.png" : "arrow-up.png"}
          alt="Arrow up"
          title="Arrow up"
        />
      </WrapperTitle>
      {switcher && (
        <Block>
          <WrapperBlock>
            <Box>
              <Box>
                {BTNS.map((btn, index) => (
                  <Button
                    key={index}
                    onClick={() => handleButtonClick(index)}
                    active={activeButton === index}
                  >
                    {t(btn)}
                  </Button>
                ))}
              </Box>
              <AnimationLink text={"open-smth-new.more-brands"} />
            </Box>
            <Cards>
              <Slider className="custom-slider" ref={ref} {...settings}>
                {CARDS_DATA.map((card, index) => (
                  <Card key={index}>
                    <ImgCad
                      src={card.img}
                      alt={card.title}
                      title={card.title}
                    />
                    <Name>{card.title.toUpperCase()}</Name>
                  </Card>
                ))}
              </Slider>
            </Cards>
          </WrapperBlock>
        </Block>
      )}
    </Container>
  );
};

export default LargestFashionGallery;
