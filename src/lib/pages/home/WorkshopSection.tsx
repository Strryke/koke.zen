import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function WorkshopSection() {
  return (
    <Container maxW="5xl" py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex display={{ base: "none", md: "flex" }}>
          <Image
            rounded="md"
            alt="feature image"
            src="https://gavinong.mo.cloudinary.net/kokezen/assets/workshop.jpeg"
            objectFit="cover"
          />
        </Flex>
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
            Our Services
          </Text>
          <Heading>Terrarium Workshops</Heading>
          <Text color="gray.500" fontSize="lg">
            Interested in creating a terrarium? We offer a variety of workshops
            catering to all ages for a hands-on experience.
          </Text>
          <Flex>
            <NextLink href="/interior" passHref>
              <Link color="teal.500">Learn More</Link>
            </NextLink>
          </Flex>
        </Stack>
        <Flex display={{ base: "flex", md: "none" }}>
          <Image
            rounded="md"
            alt="feature image"
            src="https://gavinong.mo.cloudinary.net/kokezen/assets/workshop.jpeg"
            objectFit="cover"
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
