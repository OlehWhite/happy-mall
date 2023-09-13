import { FC } from "react";
import {
  ImgAboutArrow,
  ImgAboutCircle,
  TextSmall,
  WrapperAnimationBnt,
  WrapperReadMore,
} from "./style";

type Text = {
  text: string;
};

const MapMall: FC<Text> = ({ text }) => {
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

      <TextSmall id="wrapperReadMoreTextSmall">{text}</TextSmall>
    </WrapperReadMore>
  );
};

export default MapMall;
