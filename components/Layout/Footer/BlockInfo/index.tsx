import { FC } from "react";
import {
  Container,
  Title,
  Form,
  Input,
  Button,
  Img,
  Block,
  Text,
  WrapperBlocks,
} from "./style";
import AnimationLink from "@/components/AnimationLink";
import { useTranslation } from "react-i18next";

const BlockInfo: FC = () => {
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
      <WrapperBlocks>
        <Block>
          <Img src="location.png" alt="Location" title="Location" />
          <Text>{t("our-contact.addrees")}</Text>
        </Block>
        <Block>
          <Img src="time.png" alt="Time" title="Time" />
          <Text>10:00-22:00</Text>
        </Block>
        <Block>
          <Img src="telephone.png" alt="Telephone" title="Telephone" />
          <Text>+373 22 039 736</Text>
        </Block>
        <Block>
          <Img src="massage.png" alt="Massage" title="Massage" />
          <Text>happymall.info@gmail.com</Text>
        </Block>
      </WrapperBlocks>
      <AnimationLink text={"map-mall"} />
    </Container>
  );
};

export default BlockInfo;
