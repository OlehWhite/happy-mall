import { FC } from "react";
import { Container, Link } from "./style";
import { useTranslation } from "react-i18next";
import { DATA } from "@/components/Layout/Footer/BlockMenu/data";

const BlockMenu: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      {DATA.map((link, index) => (
        <Link key={index}>{t(link)}</Link>
      ))}
    </Container>
  );
};

export default BlockMenu;
