import { FC } from "react";
import {
  Container,
  Map,
  Contacts,
  Logo,
  Mall,
  WrapperOurContacts,
  Line,
  HowToArrive,
  Img,
  Block,
  TitleContact,
  WrapperHowToArrive,
  TitleOC,
  TitleHTA,
} from "./style";
import { DATA_HOW_TO_ARR, DATA_OUR_CONT } from "@/components/OurContacts/data";

const OurContacts: FC = () => {
  return (
    <Container>
      <Contacts>
        <TitleOC>Наши контакты</TitleOC>
        <Line />
        <WrapperOurContacts>
          {DATA_OUR_CONT.map((contact, index) => (
            <Block key={index}>
              <Img
                src={contact.img}
                alt={contact.title}
                title={contact.title}
              />
              <TitleContact>{contact.title}</TitleContact>
            </Block>
          ))}
        </WrapperOurContacts>
        <HowToArrive>
          <TitleHTA>Как добраться</TitleHTA>
          <Line />
          <WrapperHowToArrive>
            {DATA_HOW_TO_ARR.map((contact, index) => (
              <Block key={index}>
                <Img
                  src={contact.img}
                  alt={contact.title}
                  title={contact.title}
                />
                <TitleContact>{contact.title}</TitleContact>
              </Block>
            ))}
          </WrapperHowToArrive>
        </HowToArrive>
      </Contacts>
      <Map>
        <Logo src="map.png" alt="Logo" title="Logo" />
        <Mall src="mall.png" alt="Mall" title="Mall" />
      </Map>
    </Container>
  );
};

export default OurContacts;
