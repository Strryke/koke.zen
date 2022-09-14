import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import type { ReactElement } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdHouseSiding } from "react-icons/md";
import { RiPlantLine } from "react-icons/ri";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction="row" align="center">
      <Flex
        w={8}
        h={8}
        align="center"
        justify="center"
        rounded="full"
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} color="gray.600">
        {text}
      </Text>
    </Stack>
  );
};

export default function IntroductionSection() {
  return (
    <Container maxW="5xl" py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          {/* <Text
            textTransform="uppercase"
            color="blue.400"
            fontWeight={600}
            fontSize="sm"
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf="flex-start"
            rounded="md"
          >
            Our Story
          </Text> */}
          <Heading>Kokezen Workshops</Heading>
          <Text color="gray.500" fontSize="lg">
            Why should we have all the fun? Get your hands dirty with us and
            build your very own terrarium!
          </Text>
          <Text color="gray.500" fontSize="lg">
            We provide the materials, guidance and expertise, allowing you to
            let your creativity flow and enjoy the therapeutic process of
            terrarium building.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={MdHouseSiding} color="yellow.500" w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text="Walk-in workshops"
            />
            <Feature
              icon={<Icon as={RiPlantLine} color="green.500" w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text="Family workshops"
            />
            <Feature
              icon={
                <Icon as={FaChalkboardTeacher} color="purple.500" w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text="Corporate workshops"
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded="md"
            alt="feature image"
            src="https://gavinong.mo.cloudinary.net/kokezen/assets/introduction.jpeg"
            objectFit="cover"
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
