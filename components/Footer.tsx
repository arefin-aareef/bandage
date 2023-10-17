"use client";

import React, { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  useColorModeValue,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Flex,
} from "@chakra-ui/react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};



const Footer = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box
    
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container px= '32px' as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, xl: 5 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={"#"}>
              About Us
            </Box>
            <Box as="a" href={"#"}>
              Blog
            </Box>
            <Box as="a" href={"#"}>
              Careers
            </Box>
            <Box as="a" href={"#"}>
              Contact Us
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={"#"}>
              Help Center
            </Box>
            <Box as="a" href={"#"}>
              Safety Center
            </Box>
            <Box as="a" href={"#"}>
              Community Guidelines
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={"#"}>
              Help Center
            </Box>
            <Box as="a" href={"#"}>
              Safety Center
            </Box>
            <Box as="a" href={"#"}>
              Community Guidelines
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Box as="a" href={"#"}>
              Cookies Policy
            </Box>
            <Box as="a" href={"#"}>
              Privacy Policy
            </Box>
            <Box as="a" href={"#"}>
              Terms of Service
            </Box>
            <Box as="a" href={"#"}>
              Law Enforcement
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Get in touch</ListHeader>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Your Email"
              />
              <InputRightElement width="6rem">
                <Button
                  backgroundColor="#23A6F0"
                  color="#ffffff"
                  size="sm"
                  onClick={handleClick}
                >
                  {show ? "Hide" : "Subscribe"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        backgroundColor="#FAFAFA"
      >
        <Flex
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text w={{base: '200px', md: 'full'}} textAlign={{base:'center', md: 'start'}} mx={{base: 'auto', md: '20px'}}>Made With Love By Finland All Right Reserved </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
