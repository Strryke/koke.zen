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
    <Container maxW="5xl" py={12} id="intro">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
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
          </Text>
          <Heading>Koke 苔(‘Moss’ in japanese) + Citizen</Heading>
          <Text color="gray.500" fontSize="lg">
            Founded in 2020, Koke.zen offers bespoke greenscaping design
            solutions guided by the principles of integrating urban green and
            its benefits into our lifestyles.
          </Text>
          <Text color="gray.500" fontSize="lg">
            We offer a variety of services to our clients to spruce up any
            space.
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
              text="Interior Design"
            />
            <Feature
              icon={<Icon as={RiPlantLine} color="green.500" w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text="Terrariums"
            />
            <Feature
              icon={
                <Icon as={FaChalkboardTeacher} color="purple.500" w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text="Workshops"
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
