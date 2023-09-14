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
} from "./style";
import ModalVideo from "@/components/ModalVideo";
import { useTranslation } from "react-i18next";
import AnimationLink from "@/components/AnimationLink";

const HappyMall: FC = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);

  const handleOpen = () => setOpenModalWindow(true);
  const handleClose = () => setOpenModalWindow(false);

  return (
    <Container>
      <WrapperImg>
        <Img src="happy-mall.png" alt="Happy mall" title="Happy mall" />
        <WrapperPlay
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleOpen}
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
          {t("happy-mall.title")}
        </Title>
        <Line />
        <Text>{t("happy-mall.text")}</Text>
        <AnimationLink text={"read-more"} />

        <WrapperSmallImg>
          <ImgSmall
            src="small-happy.png"
            alt="Small happy"
            title="Small happy"
          />
        </WrapperSmallImg>
      </WrapperAboutMall>
      <ModalVideo
        openModalWindow={openModalWindow}
        onClose={handleClose}
        videoId={"C7bxc0WRt8U"}
      />
    </Container>
  );
};

export default HappyMall;
