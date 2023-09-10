import { FC } from "react";
import HowFindUs from "@/components/HowFindUs";
import HappyMall from "@/components/HappyMall";
import OpenSmthNew from "@/components/OpenSmthNew";
import MainAnnouncements from "@/components/MainAnnouncements";
import FollowUs from "@/components/FollowUs";

const Home: FC = () => {
  return (
    <>
      <HowFindUs />
      <HappyMall />
      <OpenSmthNew />
      <MainAnnouncements />
      <FollowUs />
    </>
  );
};

export default Home;
