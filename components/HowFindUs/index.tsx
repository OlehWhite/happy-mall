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
  CustomSlider,
} from "./style";
import Slider from "react-slick";
import { DATA_IMGS } from "@/components/HowFindUs/data";
import IMGLoad from "@/public/load.png";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const ref = useRef<Slider | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [activeElement, setActiveElement] = useState<number>(0);
  const [progressTime, setProgressTime] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progressTime === 11000) {
        setProgressTime(0);
        setActiveElement((prevState) => {
          if (prevState === 4) {
            ref.current?.slickGoTo(0);
            return 0;
          } else {
            ref.current?.slickNext();
            return prevState + 1;
          }
        });
      } else {
        setProgressTime((prevState) => prevState + 1000);
      }
    }, 900);

    return () => clearTimeout(timer);
  }, [progressTime]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        return prevProgress >= 100 ? 0 : prevProgress + 10;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClick = (index: number) => {
    setProgressTime(0);
    setProgress(0);
    setActiveElement(index);
    ref.current?.slickGoTo(index);
  };

  return (
    <Container>
      <CustomSlider ref={ref} {...settings}>
        {DATA_IMGS.map((img, index) => (
          <Img key={index} src={img.img} alt={img.title} title={img.title} />
        ))}
      </CustomSlider>
      <WrapperInfo>
        <Title>{t("affordable-luxury")}</Title>
        <Button href="/how-find-us">{t("how-find-us")}</Button>
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
