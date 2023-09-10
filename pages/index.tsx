import { FC } from "react";
import HowFindUs from "@/components/HowFindUs";
import HappyMall from "@/components/HappyMall";
import OpenSmthNew from "@/components/OpenSmthNew";
import MainAnnouncements from "@/components/MainAnnouncements";

const Home: FC = () => {
  return (
    <>
      <HowFindUs />
      <HappyMall />
      <OpenSmthNew />
      <MainAnnouncements />
    </>
  );
};

export default Home;
