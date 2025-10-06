import { ChakraProvider, Box, Text, HStack, Image, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
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
      <Box top="0" w="100%">
        {/* Full width banner - breaking out of container */}
        <Box
          position="relative"
          left="50%"
          right="50%"
          marginLeft="-50vw"
          marginRight="-50vw"
          width="100vw"
          overflow="hidden"
          mt={{ base: "4vw", md: "-1vw" }}
          h={{ base: "8vw", md: "4vw" }}
          background="radial-gradient(125% 125% at 50% 10%, #18327B 40%, #0B193E 100%)"
          display="flex"
          alignItems="center"
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
        
        {/* Content with padding */}
        <Box px={{ base: "24px", md: "96px" }} py={{ base: "4vw", md: "3vw" }}>
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
          <HStack my="4vw" gap={{ base: "4vw", md: "1.5vw" }} alignItems="stretch" flexWrap={{ base: "wrap", md: "nowrap" }}>
            {/* Left Card - Description */}
            <Box
              w={{ base: "100%", md: "33.33%" }}
              flex={{ md: "1" }}
              borderRadius={{ base: "16px", md: "24px" }}
              border="0.5px solid #FFF"
              background="rgba(255, 255, 255, 0.10)"
              backdropFilter="blur(32px)"
              px={{ base: "6vw", md: "2vw" }}
              py={{ base: "6vw", md: "2vw" }}
              display="flex"
              flexDirection="column"
            >
              <Image src="assets/illustration-2.png" alt="" w="100%" mb="2vw" />
              <Text
                fontSize={{ base: "3vw", md: "1vw" }}
                color="#fff"
                textAlign="justify"
                lineHeight="1.6"
              >
                I&apos;m a{" "}
                <Box as="span" color="#3C70FF" fontWeight="semibold">
                  fifth-semester university student
                </Box>{" "}
                with a deep passion for IT, particularly web design and
                development. I thrive on creating visually appealing and
                user-friendly websites, continuously exploring and learning to
                blend aesthetics with functionality.
              </Text>
            </Box>

            {/* Center Card - Photo */}
            <Box
              w={{ base: "100%", md: "33.33%" }}
              flex={{ md: "1" }}
              borderRadius={{ base: "16px", md: "24px" }}
              border="0.5px solid #FFF"
              background="rgba(255, 255, 255, 0.10)"
              backdropFilter="blur(32px)"
              overflow="hidden"
            >
              <Image src="assets/photo-1.png" w="100%" h="100%" objectFit="cover" alt="" />
            </Box>

            {/* Right Side - Two Stacked Cards */}
            <Box
              w={{ base: "100%", md: "33.33%" }}
              flex={{ md: "1" }}
              display="flex"
              flexDirection="column"
              gap={{ base: "4vw", md: "1.5vw" }}
            >
              {/* Education Card */}
              <Box
                flex="1"
                borderRadius={{ base: "16px", md: "24px" }}
                border="0.5px solid #FFF"
                background="rgba(255, 255, 255, 0.10)"
                backdropFilter="blur(32px)"
                px={{ base: "6vw", md: "2vw" }}
                py={{ base: "6vw", md: "2vw" }}
              >
                <Text fontSize={{ base: "4vw", md: "1.8vw" }} fontWeight="extrabold" color="#fff" mb="2vw">
                  Education
                </Text>
                
                {/* Current Education */}
                <Box mb="2vw">
                  <HStack justifyContent="space-between" mb="0.5vw">
                    <Text fontSize={{ base: "3vw", md: "1.1vw" }} fontWeight="semibold" color="#fff">
                      Institut Teknologi Sepuluh Nopember
                    </Text>
                    <Text fontSize={{ base: "3vw", md: "1vw" }} color="#fff">
                      Now
                    </Text>
                  </HStack>
                  <Text fontSize={{ base: "2.5vw", md: "0.9vw" }} color="rgba(255, 255, 255, 0.7)">
                    Information System
                  </Text>
                </Box>

                {/* Previous Education */}
                <Box>
                  <HStack justifyContent="space-between" mb="0.5vw">
                    <Text fontSize={{ base: "3vw", md: "1.1vw" }} fontWeight="semibold" color="#fff">
                      SMK Telkom Malang
                    </Text>
                    <Text fontSize={{ base: "3vw", md: "1vw" }} color="#fff">
                      2023
                    </Text>
                  </HStack>
                  <Text fontSize={{ base: "2.5vw", md: "0.9vw" }} color="rgba(255, 255, 255, 0.7)">
                    Software Engineering
                  </Text>
                </Box>
              </Box>

              {/* Connect Card */}
              <Box
                flex="1"
                borderRadius={{ base: "16px", md: "24px" }}
                border="0.5px solid #FFF"
                background="rgba(255, 255, 255, 0.10)"
                backdropFilter="blur(32px)"
                px={{ base: "6vw", md: "2vw" }}
                py={{ base: "6vw", md: "2vw" }}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Text fontSize={{ base: "4vw", md: "1.8vw" }} fontWeight="extrabold" color="#fff" mb="2vw">
                  Connect
                </Text>
                
                <HStack
                  justifyContent="space-between"
                  alignItems="center"
                  cursor="pointer"
                  _hover={{ transform: "translateX(5px)", transition: "0.3s" }}
                >
                  <HStack gap="1vw">
                    <Box
                      bg="#0077B5"
                      borderRadius="8px"
                      p="0.8vw"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </Box>
                    <Text fontSize={{ base: "2.5vw", md: "1vw" }} color="#fff">
                      Let&apos;s Connect on my LinkedIn Profile!
                    </Text>
                  </HStack>
                  <Box color="#fff" fontSize={{ base: "4vw", md: "1.5vw" }}>
                    →
                  </Box>
                </HStack>
              </Box>
            </Box>
          </HStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
