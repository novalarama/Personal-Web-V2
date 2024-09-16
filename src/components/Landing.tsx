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

const Landing: React.FC<MainContentProps> = ({ image, title, description }) => {
  return (
    // <div className="flex justify-center bg-gray-950">
    //   <div className="w-full max-w-screen-2xl px-12 py-24 max-md:px-5 max-md:py-12">
    //     <div className="flex gap-10 max-md:flex-col">
    //       <div className="flex flex-col w-5/12 max-md:w-full">
    //         <img
    //           loading="lazy"
    //           src={image}
    //           alt="Designer at work"
    //           className="w-full h-auto rounded-none max-md:mt-10 max-md:max-w-full"
    //         />
    //       </div>
    //       <div className="flex flex-col justify-center w-7/12 max-md:w-full">
    //         <div className="flex flex-col text-base text-white">
    //           <h1 className="text-5xl font-bold leading-snug max-md:text-4xl max-md:leading-tight">
    //             {title}
    //           </h1>
    //           <p className="mt-6 leading-relaxed text-neutral-400 max-md:mt-4">
    //             {description}
    //           </p>
    //           <Button>Find out More →</Button>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <ChakraProvider>
      <Box w={{ base: "100%", md: "100%" }} mt={{ base: "30%", lg: "5%" }}>
        <Flex
          justifyContent="center"
          alignItems="center"
          h="100%"
          flexDir={{ base: "column", md: "row" }}
          gap="8vw"
        >
          <VStack>
            <Image
              src="assets/heading-1.png"
              alt="Designer at work"
              w="28vw"
              h="auto"
              mt="0"
              me="-4vw"
            />
            <Image
              src="assets/heading-2.png"
              alt="Designer at work"
              w="16vw"
              h="auto"
              ms="-12vw"
              rounded="none"
              mt="-12vw"
            />
            <Image
              src="assets/heading-3.png"
              alt="Designer at work"
              w="28vw"
              h="auto"
              mt="-12vw"
              me="-4vw"
            />
            <Image
              zIndex="100"
              src="assets/vector-2.png"
              alt="Designer at work"
              w="42vw"
              mt="-20vw"
              ms="-12vw"
            />
          </VStack>
          <VStack w="50%" alignItems="start" mt="-20vw">
            <Image
              zIndex="0"
              src="assets/vector-1.png"
              alt="Designer at work"
              w="42vw"
              position="absolute"
              mr="-28vw"
              // mt="-20vw"
              // ms="-12vw"
            />
            <Text
              color="#ffffff"
              lineHeight="5vw"
              fontSize="5vw"
              fontWeight="extrabold"
              top="0"
              zIndex="2"
            >
              PASSIONATE TO{" "}
              <Box as="span" bgColor="#3C70FF" px="1vw">
                DESIGN
              </Box>{" "}
              AND BUILD IT
            </Text>
            <Text color="#A8A8A8" lineHeight="1.2vw" fontSize="1vw" zIndex="2">
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
              borderRadius="24px"
              boxShadow="0px 4px 26.5px 0px rgba(0, 0, 0, 0.25)"
              backdropFilter="blur(32px)"
              color="#ffffff"
              _hover={{ bg: "#18327B", color: "white" }}
              py="32px"
              px="24px"
              zIndex="2"
              mt="4vw"
            >
              Get to Know →
            </Button>
          </VStack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Landing;
