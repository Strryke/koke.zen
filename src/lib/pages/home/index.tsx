import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import ContactForm from "../../components/ContactForm";

import Hero from "./Hero";
import InteriorSection from "./InteriorSection";
import TextSection from "./IntroductionSection";
import TerrariumSection from "./TerrariumSection";
import WorkshopSection from "./WorkshopSection";

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      w="full"
    >
      <NextSeo title="Home" />
      <Hero />
      <TextSection />
      <InteriorSection />
      <TerrariumSection />
      <WorkshopSection />
      <ContactForm />
    </Flex>
  );
};

export default Home;
