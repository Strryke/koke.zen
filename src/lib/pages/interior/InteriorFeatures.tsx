import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
  Container,
} from "@chakra-ui/react";
import type { ReactElement } from "react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        color="white"
        rounded="full"
        bg="gray.100"
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color="gray.600">{text}</Text>
    </Stack>
  );
};

export default function InteriorFeatures() {
  return (
    <Box p={4} maxWidth="6xl" marginY="50px">
      <Stack
        spacing={4}
        as={Container}
        maxW="3xl"
        textAlign="center"
        marginBottom="10vh"
      >
        <Heading fontSize="3xl">
          Our moss deserves a place in your home.
        </Heading>
        <Text color="gray.600" fontSize="xl">
          We&apos;re here to help reinvent work, play and living spaces - to
          bring nature back into our 21st century concrete jungle.
        </Text>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title="Sustainable"
          text="How long does our moss last? The first batch of preserved moss was produced nearly a decade ago, and is still looking good."
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title="Zero Maintenance"
          text="No green fingers? No worries! Preserved moss is extremely low in maintenance – it doesn’t require sunlight nor watering."
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title="Eco Friendly"
          text="No trees were harmed in the process of making any of our pieces. All our moss are carefully and delicately preserved through an eco – friendly method."
        />
      </SimpleGrid>
    </Box>
  );
}
