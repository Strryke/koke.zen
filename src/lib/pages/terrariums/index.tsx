import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import ContactForm from "lib/components/ContactForm";

import TerrariumGallery from "./TerrariumGallery";
import InteriorHeader from "./TerrariumHeader";

const Interior = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      w="full"
    >
      <NextSeo title="Interior" />
      <InteriorHeader />
      <TerrariumGallery />
      <ContactForm />
    </Flex>
  );
};

export default Interior;
