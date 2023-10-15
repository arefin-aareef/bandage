import { Flex, Heading, Text, Button } from "@chakra-ui/react";

const Action = () => {
  return (
    <Flex direction="column" my={10}>
      <Heading fontSize={40} fontWeight="bold" mx="auto">
        Start your 14 days free trial
      </Heading>
      <Text textAlign='center' fontSize={14} my={30} color="#737373" fontWeight="bold" mx="auto">
        Met minim Mollie non desert Alamo est sit cliquey dolor <br/> do met sent.
        RELIT official consequent.
      </Text>
      <Button color='#ffffff' backgroundColor='#23A6F0' size='lg' mx={'auto'}>Try it for free</Button>
    </Flex>
  );
};

export default Action;
