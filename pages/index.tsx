import { FC } from "react";
import HowFindUs from "@/components/HowFindUs";
import HappyMall from "@/components/HappyMall";
import OpenSmthNew from "@/components/OpenSmthNew";
import MainAnnouncements from "@/components/MainAnnouncements";
import FollowUs from "@/components/FollowUs";
import HappyCinema from "@/components/HappyCinema";
import Adventica from "@/components/Adventica";
import OurContacts from "@/components/OurContacts";

const Home: FC = () => {
  return (
    <>
      <HowFindUs />
      <HappyMall />
      <OpenSmthNew />
      <MainAnnouncements />
      <FollowUs />
      <HappyCinema />
      <Adventica />
      <OurContacts />
    </>
  );
};

export default Home;
