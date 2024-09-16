'use client';

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Lenis from "lenis";
import { Box } from "@chakra-ui/react";

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
  const mainContentData = {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bd3f91edd7ea87e3b08c6289817db544c51678620f21808a7eabe2843233531d?apiKey=42c352afd4764937ae53b030b073a4c4&&apiKey=42c352afd4764937ae53b030b073a4c4",
    title: "PASSIONATE TO\nDESIGN AND BUILD IT",
    description:
      "an enthusiastic UI/UX designer and front-end engineer specializing in website and mobile design. My passion lies in creating visually appealing interfaces that enhance user experiences. With a strong technical foundation, I seamlessly bring designs to life, ensuring both aesthetics and functionality. My thrives in collaborative environments and is committed to delivering innovative and user-centric solutions.",
  };

  return (
    <Box className="flex flex-col items-center px-24 max-md:px-5 bg-gray-950" >
      <Header
        logo="https://cdn.builder.io/api/v1/image/assets/TEMP/a580203fede5ad2470b2de709e88a492a7da55d9e9ea3a7f0cb978f1023c0b86?apiKey=42c352afd4764937ae53b030b073a4c4&&apiKey=42c352afd4764937ae53b030b073a4c4"
        menuItems={menuItems}
      />
      <Landing />
    </Box>
  );
};

export default LandingPage;
