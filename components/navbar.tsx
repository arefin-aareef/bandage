"use client";
import {
  Flex,
  Text,
  Link,
  Button,
  Heading,
  Hide,
  Show,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(true);

  const navOptions = (
    <>
      <Link href={"/"}>HOME</Link>
              <Link href={"/"}>PRODUCT</Link>
              <Link href={"/"}>PRICING</Link>
              <Link href={"/"}>CONTACT</Link>
    </>
  )

  const icons = (
    <>
    <Flex cursor={"pointer"}>
                <FaSearch size="27px" />
              </Flex>
              <Flex cursor={"pointer"}>
                <FaShoppingCart size="27px" />
              </Flex>
              <Flex cursor={"pointer"} onClick={() => setNav(!nav)}>
                <FaBars size="36px" />
              </Flex>
    </>
  )

  return (



    <Stack>
      {nav ? (
        <Flex
          justify={"space-between"}
          py={8}
          px={{ base: "30px", md: "59px" }}
          alignItems={"center"}
          bg={{ base: "#F6F6F6", md: "transparent" }}
        >
          <Heading fontWeight={"bold"} userSelect={"none"}>
            Bandage
          </Heading>
          <Spacer />
          <Hide below="md">
            <Flex
              alignItems={"center"}
              gap={4}
              fontSize={"sm"}
              fontWeight={"bold"}
              color={"#737373"}
            >
              {navOptions}
            </Flex>
          </Hide>
          <Show below="md">
            <Flex
              alignItems={"center"}
              gap={7}
              fontSize={"sm"}
              fontWeight={"bold"}
              color={"#737373"}
            >
              {icons}
            </Flex>
          </Show>
          <Hide below="lg">
            <Spacer />
            <Flex alignItems={"center"} gap={8}>
              <Text color={"#23A6F0"} fontWeight={"bold"} cursor={"pointer"}>
                LogIn
              </Text>
              <Button
                colorScheme="twitter"
                fontSize={"lg"}
                py={7}
                px={8}
                boxShadow={"lg"}
                rightIcon={<BiRightArrowAlt size="24px" />}
              >
                Become a Member
              </Button>
            </Flex>
          </Hide>
        </Flex>
      ) : (
        <Stack
          bg={{ base: "#F6F6F6", md: "transparent" }}
          py={8}
          px={{ base: "30px", md: "59px" }}
          // alignItems={"center"}
        >
          <Flex
            justify={"space-between"}
            alignItems={"center"}
            // bg={{ base: "#F6F6F6", md: "transparent" }}
          >
            <Heading fontWeight={"bold"} userSelect={"none"}>
              Bandage
            </Heading>
            <Spacer />
            <Hide below="md">
              <Flex
                alignItems={"center"}
                gap={4}
                fontSize={"sm"}
                fontWeight={"bold"}
                color={"#737373"}
              >
                {navOptions}
              </Flex>
            </Hide>
            <Show below="md">
              <Flex
                alignItems={"center"}
                gap={7}
                fontSize={"sm"}
                fontWeight={"bold"}
                color={"#737373"}
              >
               {icons}
              </Flex>
            </Show>
            <Hide below="lg">
              <Spacer />
              <Flex alignItems={"center"} gap={8}>
                <Text color={"#23A6F0"} fontWeight={"bold"} cursor={"pointer"}>
                  LogIn
                </Text>
                <Button
                  colorScheme="twitter"
                  fontSize={"lg"}
                  py={7}
                  px={8}
                  boxShadow={"lg"}
                  rightIcon={<BiRightArrowAlt size="24px" />}
                >
                  Become a Member
                </Button>
              </Flex>
            </Hide>
          </Flex>
          <Hide above="md">
            <Stack
              alignItems={"center"}
              gap={6}
              fontSize={"30px"}
              fontWeight={"semibold"}
              color={"#737373"}
              m={"70px"}
            >
              {navOptions}
            </Stack>
          </Hide>
        </Stack>
      )}
    </Stack>

  );
}
