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
      <Heading textAlign={"center"} fontSize='40px' py={{base:45, md:112}}>
        Meet Our Team
      </Heading>

      <Grid templateColumns={{base:"repeat(1, 1fr)", md:"repeat(3, 1fr)"}} gap={2} justifyItems='center' mx={{base:26, md:100, lg:190}}>
        {teamMembers.map((member, index) => (
            <MemberCard key={index} member={member}></MemberCard>
        ))}
      </Grid>
    </Flex>
  );
}

