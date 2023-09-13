import { FC, useEffect } from "react";
import { Container, Select } from "./style";
import { useTranslation } from "react-i18next";

const Language: FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  };

  useEffect(() => {
    const selectedLanguage = localStorage.getItem("selectedLanguage");
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
    }
  }, [i18n]);

  return (
    <Container>
      <Select onChange={handleLanguageChange}>
        <option style={{ color: "#1E1E21" }} value="en">
          EN
        </option>
        <option style={{ color: "#1E1E21" }} value="ru">
          RU
        </option>
        <option style={{ color: "#1E1E21" }} value="ro">
          RO
        </option>
      </Select>
    </Container>
  );
};

export default Language;
