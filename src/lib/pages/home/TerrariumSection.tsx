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

export default function InteriorSection() {
  return (
    <Container maxW="5xl" py={12}>
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
            Our Services
          </Text>
          <Heading>Terrariums</Heading>
          <Text color="gray.500" fontSize="lg">
            Koke.zen offers bespoke artisan moss terrarium and preserved moss
            art. <br /> Moss art is a great way to add a touch of nature to any
            interior, bringing peace and tranquility to your home or office.
          </Text>
          <Flex>
            <NextLink href="/interior" passHref>
              <Link color="teal.500">Learn More</Link>
            </NextLink>
          </Flex>
        </Stack>
        <Flex>
          <Image
            boxSize={500}
            rounded="md"
            alt="feature image"
            src="/assets/terrarium.jpeg"
            objectFit="cover"
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
