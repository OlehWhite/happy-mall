import { FC } from "react";

import { Container, Select, Option } from "@/components/Language/style";

const Language: FC = () => {
  return (
    <Container>
      <Select name="language" id="language">
        <Option value="RU">RU</Option>
      </Select>
    </Container>
  );
};

export default Language;
