import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import type { ReactNode } from "react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="lg"
      p={8}
      rounded="xl"
      align="center"
      pos="relative"
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as="h3" fontSize="xl">
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign="center"
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize="sm"
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  name,
  title,
}: {
  name: string;
  title: string;
}) => {
  return (
    <Flex align="center" mt={8} direction="column">
      <Stack spacing={-1} align="center">
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function InteriorTestimonial() {
  return (
    <Box>
      <Container maxW="7xl" py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align="center">
          <Heading>Client Testimonials</Heading>
          <Text>
            100% satisfaction{" "}
            <Text as="span" color="teal.500">
              guaranteed
            </Text>
            .
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Perfectionists</TestimonialHeading>
              <TestimonialText>
                The moss art ties in perfectly with what I had envisioned while
                designing the statement piece for the lobby. The team was a
                dream to work with.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              name="Jane Cooper"
              title="CEO at ABC Corporation"
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Patient</TestimonialHeading>
              <TestimonialText>
                Koke.zen came highly recommended by my colleague who had a good
                experience with them. They were patient and always went the
                extra mile. Overall, a fantastic team.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              name="Jane Cooper"
              title="CEO at ABC Corporation"
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Hassle-free</TestimonialHeading>
              <TestimonialText>
                Arnold has a keen eye for proportions and mixing of colors and
                moss to suit my interior. The moss art is fuss free and brings
                the outdoors in to liven up the house.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              name="Jane Cooper"
              title="CEO at ABC Corporation"
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
