import { Box, Heading, Text, Button, Stack, Center } from "@chakra-ui/react";

export default function Hero() {
  return (
    <div className="hero">
      <Center h="100%">
        <Stack as={Box} textAlign="center" spacing={{ base: 10, md: 15 }}>
          <Heading
            fontWeight={250}
            fontSize={{ base: "70", sm: "80", md: "110" }}
            lineHeight="110%"
            color="white"
          >
            Koke<em>zen</em>
            <br />
          </Heading>
          <Text
            color="gray.200"
            fontSize={{ base: "md", sm: "2xl", md: "xl" }}
            fontFamily="mono"
            fontWeight={400}
          >
            Terrariums | Landscapes | Workshops
          </Text>
          <Stack
            direction="column"
            spacing={3}
            align="center"
            alignSelf="center"
            position="relative"
            pb="100px"
          >
            <a href="#intro">
              <Button
                colorScheme="green"
                bg="green.400"
                rounded="full"
                px={6}
                _hover={{
                  bg: "green.500",
                }}
                mt="20px"
              >
                Get Started
              </Button>
            </a>
          </Stack>
        </Stack>
      </Center>
    </div>
  );
}
