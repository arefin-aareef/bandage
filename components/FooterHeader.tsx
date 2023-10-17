import { Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const FooterHeader = () => {
  return (
    <Flex direction={{base: 'column', md:'row'}} p={8} justifyContent='space-between' borderBottom='1px' borderBottomColor='#E6E6E6' mb={4}>
        <Heading>Bandage</Heading>
        <Flex gap={6} mr={4} mt={{base: '8px', md: '0px' }}>
            <Flex color='#23A6F0'><Link href=''><FaFacebookSquare size={24} /></Link></Flex>
            <Flex color='#23A6F0'><Link href=''><FaInstagram size={24} /></Link></Flex>
            <Flex color='#23A6F0'><Link href=''><FaTwitterSquare size={24} /></Link></Flex>
        </Flex>
    </Flex>
  )
}

export default FooterHeader