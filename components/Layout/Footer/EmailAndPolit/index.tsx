import React, { FC } from "react";
import { Container, Button, Img, Input, Title, Form, PrivacyPolicy, B, Text, WrapperText, Logo} from "./style";
import { useTranslation } from "react-i18next";

const EmailAndPolit: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t("footer.mailing")}</Title>
      <Form>
        <Input placeholder={t("footer.email")}></Input>
        <Button>
          <Img src="arrow-right.png" alt="Arrow right" title="Arrow right" />
        </Button>
      </Form>
      <PrivacyPolicy>
        <Logo>{t("footer.polit")}</Logo>
        <WrapperText>
          <Text>© 2023 Happy Mall</Text>
          <Text>
            Designed & Developed by <B>Rossery</B>
          </Text>
        </WrapperText>
      </PrivacyPolicy>
    </Container>
  );
};

export default EmailAndPolit;
