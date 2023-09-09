import { FC } from "react";
import { FooterBlock } from "./style";
import BlockLinks from "@/components/Layout/Footer/BlockLinks";
import BlockInfo from "@/components/Layout/Footer/BlockInfo";
import BlockMenu from "@/components/Layout/Footer/BlockMenu";

const Footer: FC = () => {
  return (
    <FooterBlock>
      <BlockLinks />
      <BlockInfo />
      <BlockMenu />
    </FooterBlock>
  );
};

export default Footer;
