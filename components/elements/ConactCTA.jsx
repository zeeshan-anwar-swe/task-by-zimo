import { Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

function ContactCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="home-contact">
        <div className="h-overlay"></div>
        <Container textAlign="center" position="relative" zIndex={2}>
          <VStack>
            <Heading>
              Contact <span className="text-primary">US</span>
            </Heading>
            <Text mt={3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatem consectetur eaque.
            </Text>
            <Link href="/contact">
              <Button
                mt={8}
                className="btn-primary"
                rightIcon={<BsArrowRight />}
              >
                Info
              </Button>
            </Link>
          </VStack>
        </Container>
      </div>
    </motion.div>
  );
}
export default ContactCTA;
