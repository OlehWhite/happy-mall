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
} from "@/components/Layout/Footer/BlockInfo/style";
import MapMall from "@/components/LanduageAndMapMall/MapMall";

const BlockInfo: FC = () => {
  return (
    <Container>
      <Title>Подпишитесь на рассылку</Title>
      <Form>
        <Input placeholder="Ваш e-mail"></Input>
        <Button>
          <Img src="arrow-right.png" alt="Arrow right" title="Arrow right" />
        </Button>
      </Form>
      <WrapperBlocks>
        <Block>
          <Img src="location.png" alt="Location" title="Location" />
          <Text>г. Кишенев, ул. Очаковская 44а</Text>
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
      <MapMall />
    </Container>
  );
};

export default BlockInfo;
