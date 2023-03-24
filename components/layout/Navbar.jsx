import { Container, Flex, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Cart from "../elements/Cart";

function Navbar() {
  return (
    <header className="header">
      <Container maxW={1200} py={1}>
        <HStack p={2} justify="space-between" className="nav">
          <Link href="/">
            <Flex gap={1}>
              <Image src="/assets/logo.png" width={40} height={40} alt="" />
              <Heading>T B Z</Heading>
            </Flex>
          </Link>
          <Cart />
        </HStack>
      </Container>
    </header>
  );
}
export default Navbar;
