/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Box,
  ChakraProvider,
  Flex,
  VStack,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";

interface MainContentProps {
  image: string;
  title: string;
  description: string;
}

export default function Landing() {
  return (
    <ChakraProvider>
      <Box w={{ base: "100%", md: "100%" }} mt={{ base: "30%", lg: "5%" }}>
        <Flex
          justifyContent="center"
          alignItems="center"
          h="100%"
          flexDir={{ base: "column", md: "row" }}
        >
          <VStack w="100%" alignItems={{ base: "center", md: "start" }}>
            <Image
              zIndex="2"
              src="assets/heading-1.png"
              alt="Designer at work"
              w={{ base: "80%", md: "28vw" }}
              h="auto"
              mt="0"
              ms="2vw"
            />
            <Image
              zIndex="2"
              src="assets/heading-2.png"
              alt="Designer at work"
              w={{ base: "40%", md: "16vw" }}
              h="auto"
              ms={{ base: "-32vw", md: "0vw" }}
              mt={{ base: "-28vw", md: "-12vw" }}
            />
            <Image
              zIndex="2"
              src="assets/heading-3.png"
              alt="Designer at work"
              w={{ base: "80%", md: "28vw" }}
              h="auto"
              mt={{ base: "-28vw", md: "-12vw" }}
              ms="2vw"
            />
            <Image
              zIndex="1"
              src="assets/vector-2.png"
              alt="Designer at work"
              w="42vw"
              mt="-20vw"
              ms="-12vw"
            />
          </VStack>
          <VStack
            w="100%"
            alignItems={{ base: "center", md: "start" }}
            mt={{ base: "-16vw", md: "-28vw" }}
          >
            <Image
              zIndex="0"
              src="assets/vector-1.png"
              alt="Designer at work"
              w="42vw"
              position="absolute"
              mr="-28vw"
            />
            <Text
              color="#ffffff"
              lineHeight={{ base: "9vw", md: "5vw" }}
              fontSize={{ base: "8vw", md: "5vw" }}
              fontWeight="extrabold"
              top="0"
              zIndex="2"
              textAlign={{ base: "center", md: "start" }}
            >
              PASSIONATE TO{" "}
              <Box as="span" bgColor="#3C70FF" px="1vw">
                DESIGN
              </Box>{" "}
              AND BUILD IT
            </Text>
            <Text
              color="#A8A8A8"
              lineHeight={{ base: "2vw", md: "1.2vw" }}
              fontSize={{ base: "2vw", md: "1vw" }}
              zIndex="2"
              textAlign={{ base: "center", md: "justify" }}
            >
              an enthusiastic UI/UX designer and front-end engineer specializing
              in website and mobile design. My passion lies in creating visually
              appealing interfaces that enhance user experiences. With a strong
              technical foundation, I seamlessly bring designs to life, ensuring
              both aesthetics and functionality. My thrives in collaborative
              environments and is committed to delivering innovative and
              user-centric solutions.
            </Text>
            <Button
              bg="rgba(24, 50, 123, 0.10)"
              border="0.5px solid #18327B"
              borderRadius={{ base: "4vw", md: "1vw" }}
              boxShadow="0px 4px 26.5px 0px rgba(0, 0, 0, 0.25)"
              backdropFilter="blur(32px)"
              color="#ffffff"
              _hover={{ bg: "#18327B", color: "white" }}
              py={{ md: "2vw" }}
              px={{ base: "6vw", md: "2vw" }}
              zIndex="2"
              mt={{ base: "2vw", md: "4vw" }}
            >
              <Text fontSize={{ base: "2vw", md: "1vw" }}>Get to Know →</Text>
            </Button>
          </VStack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
