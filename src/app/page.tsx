"use client";

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Lenis from "lenis";
import { Box, Container, VStack } from "@chakra-ui/react";

const LandingPage: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smoothWheel: true,
      // infinite: true,
      // syncTouch: true,
      // touchInertiaMultiplier: 12,
      // touchMultiplier: 0.5,
    });
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  });

  const menuItems = [
    "About",
    "Skills",
    "Experiences",
    "Achievements",
    "Portfolio",
    "Contact",
  ];

  return (
    <Box overflowX="hidden" fontFamily="Poppins">
      <Box
        position="fixed"
        top="0"
        zIndex="-10"
        height="100vh"
        width="100vw"
        background="radial-gradient(125% 125% at 50% 10%, #060814 40%, #3C70FF 100%)"
      >
        <Box height="full" width="full" px="5" py="24"></Box>
      </Box>
      <Container maxW="container.xl">
        <VStack>
          <Header logo="https://cdn.builder.io/api/v1/image/assets/TEMP/a580203fede5ad2470b2de709e88a492a7da55d9e9ea3a7f0cb978f1023c0b86?apiKey=42c352afd4764937ae53b030b073a4c4&&apiKey=42c352afd4764937ae53b030b073a4c4" menuItems={menuItems}/>
          <Landing />
          <About />
        </VStack>
      </Container>
    </Box>
  );
};

export default LandingPage;
