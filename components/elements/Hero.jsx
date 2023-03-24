import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

function Hero() {
  const heroBg = useRef(null);

  useEffect(() => {
    const scrollBg = () => {
      let offset = window.pageYOffset;
      heroBg.current.style.backgroundPositionY = offset * 0.08 + "px";
    };

    window.addEventListener("scroll", scrollBg);

    return () => {
      window.removeEventListener("scroll", scrollBg);
    };
  }, []);

  return (
    <div className="hero" ref={heroBg}>
      <div className="overlay" />

      <Container zIndex={2} position="relative" maxW={1200} py={8}>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box maxW="600px">
            <Heading>
              Welcome to <span className="text-primary bold">NEXT</span> cart
            </Heading>
            <Text mt={2}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              minus velit nisi omnis. Et quibusdam eos eius in sunt cum quis
              beatae dicta voluptas harum?
            </Text>
            <HStack mt={6}>
              <Link href="/products">
                <Button className="btn-primary">Products</Button>
              </Link>
            </HStack>
          </Box>
        </motion.div>
      </Container>
    </div>
  );
}
export default Hero;
