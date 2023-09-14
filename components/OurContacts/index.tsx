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
import { useTranslation } from "react-i18next";

const OurContacts: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Contacts>
        <TitleOC>{t("our-contact.title")}</TitleOC>
        <Line />
        <WrapperOurContacts>
          {DATA_OUR_CONT.map((contact, index) => (
            <Block key={index}>
              <Img
                src={contact.img}
                alt={contact.title}
                title={contact.title}
              />
              <TitleContact>{t(contact.title)}</TitleContact>
            </Block>
          ))}
        </WrapperOurContacts>
        <HowToArrive>
          <TitleHTA>{t("our-contact.second-title")}</TitleHTA>
          <Line />
          <WrapperHowToArrive>
            {DATA_HOW_TO_ARR.map((contact, index) => (
              <Block key={index}>
                <Img
                  src={contact.img}
                  alt={contact.title}
                  title={contact.title}
                />
                <TitleContact>{t(contact.title)}</TitleContact>
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
