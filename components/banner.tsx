import { Flex, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { LiaAngleRightSolid } from 'react-icons/lia';



export default function Banner() {
    const img1 = '/src/assets/img1.png'
    return (
        <Flex  direction={"column"} alignItems={"center"} pt={13}>

            <Flex  direction={"column"} textAlign={"center"} py={50}>
                <Text color="#737373" fontWeight={"bold"} fontSize={16}>WHAT WE DO</Text>
                <Text fontWeight={"bold"} fontSize={58} py={2}>Innovation tailored for you</Text>
                <Flex display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Text color={"#252B42"} fontWeight={"bold"} fontSize={14}>Home</Text>
                    <Text mx={2}><LiaAngleRightSolid /></Text>
                    <Text color={"#737373"} fontWeight={"bold"} fontSize={14}>Team</Text>
                </Flex>
            </Flex>

            <Grid templateColumns='repeat(2, 1fr)'>
                <GridItem mx={"auto"}>
                    <Image src='/assets/img1.png' alt='img' />
                </GridItem>
                <GridItem>
                    <Grid  templateColumns='repeat(2, 1fr)' gap={2}>
                        <GridItem><Image src="/assets/img2.png" alt="img" /></GridItem>
                        <GridItem><Image src="/assets/img3.png" alt="img" /></GridItem>
                        <GridItem><Image src="/assets/img4.png" alt="img" /></GridItem>
                        <GridItem><Image src="/assets/img5.png" alt="img" /></GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </Flex>
    )
}