import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import { FaEtsy, FaInstagram, FaTiktok } from "react-icons/fa";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2022 Kokezen. All rights reserved</Text>
        <Stack direction="row" spacing={6}>
          <SocialButton
            label="Instagram"
            href="https://www.instagram.com/koke.zen/?hl=en"
          >
            <FaInstagram />
          </SocialButton>
          <SocialButton
            label="TikTok"
            href="https://www.tiktok.com/@koke.zen?is_from_webapp=1&sender_device=pc"
          >
            <FaTiktok />
          </SocialButton>
          <SocialButton
            label="Etsy"
            href="https://www.etsy.com/sg-en/shop/Kokezen?ref=seller-platform-mcnav"
          >
            <FaEtsy />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
