import { FC } from "react";
import { Container, Select } from "./style";

const languages = ["RU", "EN", "RO"];

const Language: FC = () => {
  return (
    <Container>
      <Select>
        {languages.map((language, index) => (
          <option style={{ color: "#1E1E21" }} key={index}>
            {language}
          </option>
        ))}
      </Select>
    </Container>
  );
};

export default Language;
