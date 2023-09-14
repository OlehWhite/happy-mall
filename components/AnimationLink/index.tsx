import { FC } from "react";
import {
  ImgAboutArrow,
  ImgAboutCircle,
  TextSmall,
  WrapperAnimationBnt,
  WrapperReadMore,
} from "./style";
import { useTranslation } from "react-i18next";

type Text = {
  text: string;
};

const MapMall: FC<Text> = ({ text }) => {
  const { t } = useTranslation();

  return (
    <WrapperReadMore id="wrapperReadMore">
      <WrapperAnimationBnt>
        <ImgAboutCircle src="circle.png" alt="Read more" title="Read more" />
        <ImgAboutArrow
          id="wrapperReadMoreImgAboutArrow"
          src="vertical-egle.png"
          alt="Read more"
          title="Read more"
        />
      </WrapperAnimationBnt>

      <TextSmall id="wrapperReadMoreTextSmall">{t(text)}</TextSmall>
    </WrapperReadMore>
  );
};

export default MapMall;
