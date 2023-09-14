import { FC, useEffect, useRef, useState } from "react";
import {
  Container,
  Img,
  WrapperInfo,
  Title,
  Button,
  Block,
  Circular,
  Wrapper,
  ImgLoad,
} from "./style";
import Slider from "react-slick";
import { DATA_IMGS } from "@/components/HowFindUs/data";
import IMGLoad from "@/public/load.png";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  useTransform: false,
};

const HowFindUs: FC = () => {
  const ref = useRef<Slider | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [activeElement, setActiveElement] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveElement((prevState) => {
        if (prevState === 4) {
          ref.current?.slickGoTo(0);
          return 0;
        } else {
          ref.current?.slickNext();
          return prevState + 1;
        }
      });
    }, 11000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClick = (index: number) => {
    setProgress(0);
    setActiveElement(index);
    ref.current?.slickGoTo(index);
  };

  return (
    <Container>
      <Slider ref={ref} {...settings}>
        {DATA_IMGS.map((img, index) => (
          <Img key={index} src={img.img} alt={img.title} title={img.title} />
        ))}
      </Slider>
      <WrapperInfo>
        <Title>Доступная Роскошь</Title>
        <Button href="/how-find-us">Как нас найти</Button>
        <Wrapper>
          {DATA_IMGS.map((_, index) => (
            <Block key={index} onClick={() => handleClick(index)}>
              {activeElement === index ? (
                <Circular
                  variant="determinate"
                  value={progress}
                  thickness={2}
                  size={25}
                />
              ) : (
                <Circular
                  variant="determinate"
                  value={0}
                  thickness={2}
                  size={25}
                />
              )}
              <ImgLoad src={IMGLoad.src} />
            </Block>
          ))}
        </Wrapper>
      </WrapperInfo>
    </Container>
  );
};

export default HowFindUs;
