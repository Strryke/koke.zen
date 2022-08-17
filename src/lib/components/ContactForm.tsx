/* eslint-disable react/no-children-prop */
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdPhone, MdEmail, MdOutlineEmail } from "react-icons/md";

export default function ContactForm() {
  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="teal.400"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={2}>
                      <Heading color="white.200">Contact Us</Heading>
                      <Text
                        size="md"
                        height="48px"
                        width="200px"
                        marginX="auto"
                        textAlign="center"
                        marginBottom="30px !important"
                      >
                        90 Jalan Lekar <br /> (Open on weekends from 10am-6pm)
                      </Text>
                      <Button
                        size="md"
                        height="30px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid" }}
                        leftIcon={<MdPhone size="20px" />}
                      >
                        +65-9656 1282
                      </Button>
                      <Button
                        size="md"
                        height="30px"
                        width="300px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid" }}
                        leftIcon={<MdEmail size="20px" />}
                      >
                        <a href="mailto:thekokezen@gmail.com">
                          thekokezen@gmail.com
                        </a>
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="email" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="teal.400"
                          color="white"
                          _hover={{ bg: "teal.500" }}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
