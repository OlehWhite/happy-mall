import { FC } from "react";
import { Container, Select } from "./style";
import { useTranslation } from "react-i18next";

const Language: FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <Container>
      <Select d="language" onChange={changeLanguage} value={i18n.language}>
        <option style={{ color: "#1E1E21" }} value="ru">
          RU
        </option>
        <option style={{ color: "#1E1E21" }} value="en">
          EN
        </option>
        <option style={{ color: "#1E1E21" }} value="ro">
          RO
        </option>
      </Select>
    </Container>
  );
};

export default Language;
