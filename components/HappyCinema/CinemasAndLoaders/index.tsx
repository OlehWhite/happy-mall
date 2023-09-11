import { FC, useEffect, useState } from "react";
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
} from "./style";
import IMGLoad from "public/load.png";

const arrLoad = [0, 1, 2, 3, 4];

const Loader: FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState<number>(0);
  const [activeElement, setActiveElement] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveElement((prevState) => {
        if (prevState === 4) {
          return 0;
        } else {
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

  return (
    <Container>
      <Wrapper>
        <Logo src="cinema.png" alt="Cinema" title="Cinema" />
      </Wrapper>
      <WrapperImg>
        <WrapperPlay
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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
        {arrLoad.map((load, index) => (
          <Block key={load}>
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
    </Container>
  );
};

export default Loader;
