import { Flex, Text, Link, Button, Heading } from "@chakra-ui/react";
import { AiOutlineArrowRight } from 'react-icons/ai';


export default function Navbar() {
  return (
    <Flex px={59} py={8} justifyContent={"space-around"} alignItems={"center"}>
        <Heading>Bandage</Heading>

        <Flex gap={4} fontWeight={"bold"} color={"#737373"}>
            <Link>Home</Link>
            <Link>Product</Link>
            <Link>Pricing</Link>
            <Link>Contact</Link>
        </Flex>

        <Flex>
            <Button color={"#23A6F0"} backgroundColor={"#ffffff"}>Login</Button>
            <Button rounded={4} color={"#ffffff"} backgroundColor={"#23A6F0"} ms={45}>Become a Member  <Text ml={2}><AiOutlineArrowRight /></Text></Button>
        </Flex>

    </Flex>
  );
}
