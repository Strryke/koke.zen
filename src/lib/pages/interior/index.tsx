import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import ContactForm from "lib/components/ContactForm";

// import InteriorCarousell from "./InteriorCarousell";
import InteriorFeatures from "./InteriorFeatures";
import InteriorHeader from "./InteriorHeader";
// import InteriorTestimonial from "./InteriorTestimonial";
import InteriorProjects from "./InteriorProjects";

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
      <InteriorProjects />
      <InteriorFeatures />
      {/* <InteriorTestimonial /> */}
      {/* <InteriorCarousell /> */}
      <ContactForm />
    </Flex>
  );
};

export default Interior;
