import { FC, useRef, useState } from "react";
import {
  Container,
  Title,
  Img,
  Block,
  WrapperTitle,
  Button,
  WrapperBlock,
  MoreBrands,
  Text,
  Cards,
  Card,
  ImgCad,
  Name,
  Box,
} from "./style";
import { BTNS } from "./btns";
import { CARDS_DATA } from "@/components/OpenSmthNew/HomeAndSoul/cands";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  arrows: false,
  useTransform: false,
};

const HomeAndSoul: FC = () => {
  const ref = useRef<Slider | null>(null);
  const [switcher, setSwitcher] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<number>(0);

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
        <Title onClick={clickChangeSwitcher}>Дом и душа</Title>
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
                    {btn}
                  </Button>
                ))}
              </Box>
              <MoreBrands>
                <Img src="icon.png" alt="Icon" title="Icon" />
                <Text>БОЛЬШЕ БРЕНДОВ</Text>
              </MoreBrands>
            </Box>
            <Cards>
              <Slider
                style={{ width: 1600, padding: "0 20px" }}
                ref={ref}
                {...settings}
              >
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

export default HomeAndSoul;
