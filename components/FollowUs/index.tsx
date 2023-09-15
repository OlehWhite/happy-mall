import { FC, useState } from "react";
import {
  Container,
  Img,
  BlockInfo,
  Line,
  Text,
  Title,
  WrapperPlay,
  WrapperImg,
  BlockLinks,
  Block,
  Wrapper,
  Name,
  Images,
  Followers,
  WrapperImages,
  WrapperFollowers,
  WrapperInfo,
  WrapperSmall,
  ImgMob,
} from "./style";
import { LINKS } from "@/components/FollowUs/links";
import ModalVideo from "@/components/ModalVideo";
import { useTranslation } from "react-i18next";

const FollowUs: FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleOpen = () => setOpenModalWindow(true);
  const handleClose = () => setOpenModalWindow(false);

  return (
    <Container>
      <WrapperImg>
        <ImgMob src="follow-us.png" alt="Follow us" title="Follow us" />
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
      <BlockInfo>
        <Title>{t("follow-us.title")}</Title>
        <Line />
        <Text>{t("follow-us.text")}</Text>
        <BlockLinks>
          {LINKS.map((link, index) => (
            <Block key={index}>
              <Wrapper href={link.link} target="_blank">
                <Img src={link.logo} alt={link.title} title={link.title} />
              </Wrapper>
              <WrapperInfo>
                <Name>{link.title}</Name>
                <WrapperSmall>
                  <WrapperImages>
                    <Img src="img.png" alt="Img" title="Img" />
                    <Images>{link.images}</Images>
                  </WrapperImages>
                  <WrapperFollowers>
                    <Img src="person.png" alt="Person" title="Person" />
                    <Followers>{link.followers}</Followers>
                  </WrapperFollowers>
                </WrapperSmall>
              </WrapperInfo>
            </Block>
          ))}
        </BlockLinks>
      </BlockInfo>
      <ModalVideo
        openModalWindow={openModalWindow}
        onClose={handleClose}
        videoId={"C7bxc0WRt8U"}
      />
    </Container>
  );
};

export default FollowUs;
