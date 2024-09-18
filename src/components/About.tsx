import { ChakraProvider, Box, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function About() {
  const aboutText = "ABOUT ME • ".repeat(10);

  return (
    <ChakraProvider>
      <Box
        w="100vw"
        overflow="hidden"
        bg="yellow"
        mt={{ base: "4vw", md: "-12vw" }}
        h={{ base: "8vw", md: "4vw" }}
        background="radial-gradient(125% 125% at 50% 10%, #18327B 40%, #0B193E 100%)"
        display="flex"
        alignItems="center"
      >
        <motion.div
          style={{ display: "flex", whiteSpace: "nowrap" }}
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear"
          }}
        >
          <Text
            textAlign="center"
            fontSize={{ base: "4vw", md: "2vw" }}
            color="#3C70FF"
            fontWeight="extrabold"
            mx="2vw"
          >
            {aboutText}
          </Text>
        </motion.div>
      </Box>
    </ChakraProvider>
  );
}
