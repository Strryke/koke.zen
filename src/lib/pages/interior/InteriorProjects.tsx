import { Container, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import InteriorCard from "./InteriorCard";
import pic1 from "./project-assets/1.jpeg";
import pic2 from "./project-assets/2.jpeg";
import pic3 from "./project-assets/3.png";
import pic4 from "./project-assets/4.jpeg";

const projectList = [
  {
    title: "M O S S A R T",
    description:
      "Thank you Koke.zen for creating this piece for us! Ordering and discussing the designs for our home was fuss free, and the pricing was very reasonable! Would recommend!",
    location: "Modern maisonette home",
    image: pic1,
  },
  {
    title: "M O S S A R T",
    description:
      "The moss art ties in perfectly with what I had envisioned while designing the statement piece for the lobby. The team was also a dream to work with, consistently ensuring that my needs and vision were met. I would definitely partner with Koke.zen for my future client projects.",
    location: "Busways Pte Ltd.",
    image: pic2,
  },
  {
    title: "Autumn Special",
    description:
      "Arnold has a keen eye for proportions and mixing of colors and moss to suit my interior. He is open to suggestion and will work around your budget. The moss art is fuss free and bring the outdoors in to liven up the house",
    location: "Modern maisonette home",
    image: pic3,
  },
  {
    title: "Moss Time",
    description:
      "A beautiful moss clock for my parents. Truly love it… Thank you very much.",
    location: "",
    image: pic4,
  },
];

function InteriorProjects() {
  return (
    <div>
      <Stack
        spacing={4}
        as={Container}
        maxW="3xl"
        textAlign="center"
        marginBottom="10vh"
      >
        <Heading fontSize="3xl">Our Previous Installations</Heading>
      </Stack>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={5} margin="10px">
        {projectList.map((project) => (
          <InteriorCard {...project} />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default InteriorProjects;
