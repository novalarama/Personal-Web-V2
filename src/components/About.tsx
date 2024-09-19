import { ChakraProvider, Box, Text, HStack, Image } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const aboutText = "ABOUT ME • ".repeat(20);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ChakraProvider>
      <Box top="0" px={{ base: "4vw", md: "12vw" }}>
        <Box
          w="100vw"
          overflow="hidden"
          bg="yellow"
          mt={{ base: "4vw", md: "-1vw" }}
          h={{ base: "8vw", md: "4vw" }}
          background="radial-gradient(125% 125% at 50% 10%, #18327B 40%, #0B193E 100%)"
          display="flex"
          alignItems="center"
          position="relative"
        >
          <motion.div
            style={{
              display: "flex",
              whiteSpace: "nowrap",
              position: "absolute",
              transform: `translateX(${scrollY * -0.5}px)`,
            }}
          >
            <Text
              textAlign="center"
              w="fit-content"
              overflow="hidden"
              fontSize={{ base: "4vw", md: "2vw" }}
              color="#3C70FF"
              fontWeight="extrabold"
              mx="2vw"
            >
              {aboutText}
            </Text>
          </motion.div>
        </Box>
        <Box px={{ base: "4vw", md: "12vw" }} py={{ base: "0vw", md: "3vw" }}>
          <HStack justifyContent="space-between">
            <Text
              fontSize={{ base: "4vw", md: "2.5vw" }}
              fontWeight="extrabold"
              color="#fff"
              lineHeight={{ base: "5vw", md: "3vw" }}
            >
              Get to know <br />
              about myself.
            </Text>
            <Text color="#fff" fontSize={{ base: "3vw", md: "1vw" }}>
              To learn more about me, let&apos;s connect and get to know <br />{" "}
              each other better. I&apos;m excited to share my journey and <br />{" "}
              interests with you.
            </Text>
          </HStack>
          <HStack my="4vw" gap="1vw" alignItems="stretch">
            {" "}
            <Box
              w={{ base: "100%", md: "20vw" }}
              borderRadius="24px"
              border="0.5px solid #FFF"
              background="rgba(255, 255, 255, 0.10)"
              backdropFilter="blur(32px)"
              px="1.5vw"
              py="1.5vw"
              h="60vh"
            >
              <Image src="assets/illustration-2.png" alt="" />
              <Text
                mt="2vw"
                fontSize={{ base: "3vw", md: "1vw" }}
                color="#fff"
                w="fit-content"
                textAlign="justify"
              >
                I&apos;m a{" "}
                <Box as="span" color="#3C70FF">
                  third-semester university student
                </Box>{" "}
                with a deep passion for IT, particularly web design and
                development. I thrive on creating visually appealing and
                user-friendly websites, continuously exploring and learning to
                blend aesthetics with functionality.
              </Text>
            </Box>
            <Box
              w={{ base: "100%", md: "20vw" }}
              minH="full"
              borderRadius="24px"
              border="0.5px solid #FFF"
              background="rgba(255, 255, 255, 0.10)"
              backdropFilter="blur(32px)"
              overflow="hidden"
            >
              <Image src="assets/photo-1.png" w="100%" h="100%" objectFit="cover" alt="" />
            </Box>
            <Box
              w={{ base: "100%", md: "20vw" }}
              borderRadius="24px"
              border="0.5px solid #FFF"
              background="rgba(255, 255, 255, 0.10)"
              backdropFilter="blur(32px)"
              px="1.5vw"
              py="1.5vw"
              h="60vh"
            >
              <Text fontSize={{base: "2vw", md: "2vw"}} fontWeight="extrabold" color="ffffff">Education</Text>
              <Text
                mt="2vw"
                fontSize={{ base: "3vw", md: "1vw" }}
                color="#fff"
                w="fit-content"
                textAlign="justify"
              >
                I&apos;m a{" "}
                <Box as="span" color="#3C70FF">
                  third-semester university student
                </Box>{" "}
                with a deep passion for IT, particularly web design and
                development. I thrive on creating visually appealing and
                user-friendly websites, continuously exploring and learning to
                blend aesthetics with functionality.
              </Text>
            </Box>
          </HStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
