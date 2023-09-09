import { FC } from "react";
import { Container, Link } from "./style";

const menuLinks = [
  "Магазины",
  "Рестораны",
  "Услуги",
  "Развлечения",
  "Новости и скидки",
  "О нас",
  "Вакансии",
  "Арендаторам",
  "Контакты",
];

const BlockMenu: FC = () => {
  return (
    <Container>
      {menuLinks.map((link, index) => (
        <Link key={index}>{link}</Link>
      ))}
    </Container>
  );
};

export default BlockMenu;
