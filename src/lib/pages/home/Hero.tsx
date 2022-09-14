import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      w="full"
      h="calc(100vh - 100px)"
      backgroundImage="https://gavinong.mo.cloudinary.net/kokezen/assets/landing.jpeg"
      backgroundSize="cover"
      backgroundPosition="center center"
    >
      <Container maxW="3xl">
        <Stack
          as={Box}
          textAlign="center"
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize="100px"
            lineHeight="110%"
            color="white"
          >
            Koke.zen <br />
          </Heading>
          <Text color="gray.100">
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
          <Stack
            direction="column"
            spacing={3}
            align="center"
            alignSelf="center"
            position="relative"
          >
            <Button
              colorScheme="green"
              bg="green.400"
              rounded="full"
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Get Started
            </Button>
            <Button variant="link" colorScheme="blue" size="sm">
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
}
