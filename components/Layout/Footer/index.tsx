import { FC } from "react";
import { FooterBlock } from "./style";
import BlockLinks from "@/components/Layout/Footer/BlockLinks";
import BlockInfo from "@/components/Layout/Footer/BlockInfo";
import BlockMenu from "@/components/Layout/Footer/BlockMenu";
import EmailAndPolit from "@/components/Layout/Footer/EmailAndPolit";

const Footer: FC = () => {
  return (
    <FooterBlock>
      <BlockLinks />
      <BlockInfo />
      <BlockMenu />
      <EmailAndPolit />
    </FooterBlock>
  );
};

export default Footer;
