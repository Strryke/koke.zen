import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import ContactForm from "lib/components/ContactForm";

import IntroductionSection from "./IntroductionSection";
import WorkshopCarousell from "./WorkshopCarousell";
import WorkshopFeatures from "./WorkshopFeatures";

const Workshop = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      w="full"
    >
      <NextSeo title="Workshop" />
      {/* <WorkshopHeader /> */}
      <IntroductionSection />
      <WorkshopCarousell />
      <WorkshopFeatures />
      <ContactForm />
    </Flex>
  );
};

export default Workshop;
