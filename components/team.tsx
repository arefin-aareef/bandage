import { Heading, Container, Grid, Flex, Image, Text } from "@chakra-ui/react";
import MemberCard from "./memberCard";

export default function Team() {
  const teamMembers = [
    {
      name: "Username",
      profession: "Profession",
      image: "/assets/user1.jpg",
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/assets/user2.jpg",
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/assets/user3.jpg",
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/assets/user4.jpg",
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/assets/user5.jpg",
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/assets/user6.jpg",
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/assets/user7.jpg",
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/assets/user8.jpg",
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/assets/user9.jpg",
    },
  ];
  return (
    <Flex direction='column'>
      <Heading textAlign={"center"} py={112}>
        Meet Our Team
      </Heading>

      <Grid templateColumns="repeat(3, 1fr)" gap={10} justifyItems='center' mx={203}>
        {teamMembers.map((member, index) => (
            <MemberCard key={index} member={member}></MemberCard>
        ))}
      </Grid>
    </Flex>
  );
}

