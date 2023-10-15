import { Flex, Image, Text, Container } from "@chakra-ui/react";

import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

type memberCardProps = {
  member: {
    name: string;
    profession: string;
    image: string;
  };
};

const MemberCard: React.FC<memberCardProps> = ({ member }) => {
  return (
    <Container>
      <Flex direction="column" objectFit="cover" h="100%" w="full" pb={112}>
        <Image src={member.image} alt="img" maxH="320px" />
        <Flex direction="column" textAlign="center">
          <Text color="#252B42" fontSize={16} fontWeight="bold" pt={30}>
            {member.name}
          </Text>
          <Text color="#737373" fontSize={14} fontWeight="bold" py={5}>
            {member.profession}
          </Text>
          <Flex mx="auto" pb={30}>
            <Flex cursor='pointer' color="#23A6F0">
              <BsFacebook size={24}/>
            </Flex>
            <Flex cursor='pointer' color="#23A6F0" mx={10}>
              <FiTwitter size={24} />
            </Flex>
            <Flex cursor='pointer' color="#23A6F0">
              <BsInstagram size={24} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default MemberCard;
