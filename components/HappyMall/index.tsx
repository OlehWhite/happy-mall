import { FC, useState } from "react";
import {
  Container,
  WrapperImg,
  Img,
  WrapperAboutMall,
  Title,
  Line,
  Text,
  WrapperSmallImg,
  ImgSmall,
  WrapperPlay,
  WrapperReadMore,
  TextSmall,
} from "./style";

const HappyMall: FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container>
      <WrapperImg>
        <Img src="happy-mall.png" alt="Happy mall" title="Happy mall" />
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
      <WrapperAboutMall>
        <Title>
          Happy Mall — <br />
          крупнейший молл в <br />
          Молдове
        </Title>
        <Line />
        <Text>
          Торговый центр построен в соответствии с самыми высокими
          международными стандартами качества. Здесь вы найдете Fashion Gallery
          с более чем 250 брендов, зону с товарами Home, lifestyle & beauty со
          всеми включенными услугами
        </Text>
        <WrapperReadMore>
          <ImgSmall src="icon.png" alt="Read more" title="Read more" />
          <TextSmall>ЧИТАТЬ БОЛЬШЕ</TextSmall>
        </WrapperReadMore>
        <WrapperSmallImg>
          <ImgSmall
            src="small-happy.png"
            alt="Small happy"
            title="Small happy"
          />
        </WrapperSmallImg>
      </WrapperAboutMall>
    </Container>
  );
};

export default HappyMall;
