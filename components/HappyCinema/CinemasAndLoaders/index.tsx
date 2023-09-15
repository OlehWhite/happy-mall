import { FC, useEffect, useRef, useState } from "react";
import {
  Container,
  Block,
  Circular,
  Img,
  WrapperImg,
  Logo,
  WrapperBlocks,
  WrapperPlay,
  Wrapper,
  CustomSlider,
} from "./style";
import IMGLoad from "public/load.png";
import { DATA_IMGS } from "@/components/HappyCinema/data";
import Slider from "react-slick";
import ModalVideo from "@/components/ModalVideo";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  useTransform: false,
};

const Loader: FC = () => {
  const ref = useRef<Slider | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState<number>(0);
  const [activeElement, setActiveElement] = useState<number>(0);
  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);
  const [currentVideo, setCurrentVide] = useState<string>("");
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
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClick = (index: number, link: string) => {
    setProgressTime(0);
    setCurrentVide(link);
    setProgress(0);
    setActiveElement(index);
    ref.current?.slickGoTo(index);
  };

  const handleOpen = (link: string) => {
    setCurrentVide(link);
    setProgress(0);
    setOpenModalWindow(true);
  };

  const handleClose = () => setOpenModalWindow(false);

  return (
    <Container>
      <CustomSlider ref={ref} {...settings}>
        {DATA_IMGS.map((img, index) => (
          <Logo key={index} src={img.img} alt={img.title} title={img.title} />
        ))}
      </CustomSlider>
      <Wrapper>
        <WrapperImg>
          <WrapperPlay
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleOpen(DATA_IMGS[activeElement].link)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 12 14"
              style={{ transition: ".3s" }}
              fill={isHovered ? "#C6A687" : "#FDFCFA"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 7L-6.52533e-07 13.9282L-4.68497e-08 0.0717964L12 7Z" />
            </svg>
          </WrapperPlay>
        </WrapperImg>
        <WrapperBlocks>
          {DATA_IMGS.map((element, index) => (
            <Block key={index} onClick={() => handleClick(index, element.link)}>
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
              <Img src={IMGLoad.src} />
            </Block>
          ))}
        </WrapperBlocks>
      </Wrapper>
      <ModalVideo
        openModalWindow={openModalWindow}
        onClose={handleClose}
        videoId={currentVideo}
      />
    </Container>
  );
};

export default Loader;
