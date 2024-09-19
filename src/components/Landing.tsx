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
      <Box
        w={{ base: "100%", md: "100%" }}
        mt={{ base: "30%", lg: "14%" }}
        maxW="100%"
        px={{ base: "4vw", md: "10vw" }}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          h="100%"
          flexDir={{ base: "column", md: "row" }}
        >
          <VStack w="100%" alignItems="center">
            <Image
              src="assets/illustration-1.png"
              alt=""
              mt={{ base: "-24vw", md: "-12vw" }}
              w={{ base: "80%", md: "80%" }}
              h={{ base: "auto", md: "50vw" }}
              objectFit={{ base: "contain", md: "cover" }}
              overflow="hidden"
            />
          </VStack>
          <VStack
            w="100%"
            alignItems={{ base: "center", md: "start" }}
            mt={{ base: "6vw", md: "-12vw" }}
          >
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
              fontSize={{ base: "3vw", md: "1vw" }}
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
