import {
  Box,
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Container,
  Image,
} from "@chakra-ui/react";

interface FeatureProps {
  title: string;
  text: string;
  image: string;
}

const Feature = ({ title, text, image }: FeatureProps) => {
  return (
    <Stack>
      <Image src={image} alt={title} height="250px" objectFit="cover" />
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
          image="https://gavinong.mo.cloudinary.net/kokezen/assets/workshop/Kokezen-24.jpg"
          title="Walk-in Workshops"
          text="Interested in a fun weekend activity? Come join us for a workshop and learn how to care for your moss."
        />
        <Feature
          image="https://gavinong.mo.cloudinary.net/kokezen/assets/workshop/private%20workshop/birthday%20party/IMG_20220613_131606_418.jpg"
          title="Private Workshops"
          text="Corporate team building? Birthday party? We can help you create a unique experience for your guests."
        />
        <Feature
          image="https://gavinong.mo.cloudinary.net/kokezen/assets/workshop/private%20workshop/birthday%20party/20220612_124537.jpg"
          title="Family Friendly"
          text="Terrarium kits are a great way to introduce your kids to the world of plants. Spend quality time with your loved ones and create a beautiful piece of art together."
        />
      </SimpleGrid>
    </Box>
  );
}
