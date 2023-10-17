'use client'

// import { Flex, Image, Text, Container } from "@chakra-ui/react";

import Banner from "@/components/banner";
import Team from "@/components/team";
import Action from "@/components/action";
import Footer from "@/components/Footer";
import FooterHeader from "@/components/FooterHeader";

export default function Page() {
  return (
    <>
      <Banner></Banner>
      <Team></Team>
      <Action></Action>
      <FooterHeader></FooterHeader>
      <Footer></Footer>
    </>
  );
}
