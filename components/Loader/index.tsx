import { FC, useEffect, useState } from "react";
import { Container, Block, Circular, Img } from "@/components/Loader/style";
import IMGLoad from "public/load.png";

const arrLoad = [0, 1, 2, 3, 4];

const Loader: FC = () => {
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
            <Circular variant="determinate" value={0} thickness={2} size={25} />
          )}
          <Img src={IMGLoad.src} />
        </Block>
      ))}
    </Container>
  );
};

export default Loader;
