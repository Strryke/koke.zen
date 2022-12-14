import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

interface InteriorCardProps {
  title: string;
  location: string;
  image: StaticImageData;
  description: string;
}

export default function InteriorCard(props: InteriorCardProps) {
  const { title, location, image, description } = props;
  return (
    <Center py={6}>
      <Box
        maxW="445px"
        w="full"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow="2xl"
        rounded="md"
        p={6}
        overflow="hidden"
        height="100%"
      >
        <Box h="210px" bg="gray.100" mt={-6} mx={-6} mb={6} pos="relative">
          <Image src={image} layout="fill" />
        </Box>
        <Stack>
          <Text
            color="green.500"
            textTransform="uppercase"
            fontWeight={800}
            fontSize="sm"
            letterSpacing={1.1}
          >
            {location}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize="2xl"
            fontFamily="body"
          >
            {title}
          </Heading>
          <Text color="gray.500">{description}</Text>
        </Stack>
        {/* <Stack mt={6} direction="row" spacing={4} align="center">
          <Avatar
            src="https://avatars0.githubusercontent.com/u/1164541?v=4"
            alt="Author"
          />
          <Stack direction="column" spacing={0} fontSize="sm">
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color="gray.500">Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack> */}
      </Box>
    </Center>
  );
}
