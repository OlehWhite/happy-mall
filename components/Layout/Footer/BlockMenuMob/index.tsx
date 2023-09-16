import { FC } from "react";
import { Container, Link } from "./style";
import { DATA } from "@/components/Layout/Footer/BlockMenu/data";
import { useTranslation } from "react-i18next";

const BlockMenuMob: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      {DATA.map((link, index) => (
        <Link key={index}>{t(link)}</Link>
      ))}
    </Container>
  );
};

export default BlockMenuMob;
