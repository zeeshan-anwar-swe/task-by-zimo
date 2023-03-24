import { Box, Container, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import SocialIcons from "../elements/SocialIcons";

function Footer() {
  return (
    <Box as="footer" className="footer" bg="blackAlpha.800">
      <Container maxW={1200} py={8} color="gray.300">
        <HStack gap={8} justify="space-between" flexWrap="wrap">
          <Stack>
            <Link href="/">
              <Heading className="text-primary">Cart</Heading>
            </Link>
            <Text>Developed by ZEESHAN ANWAR.</Text>
            <Stack className="social" pt={4}>
              <SocialIcons direction="row" gap={4} fontSize="2xl" />
            </Stack>
          </Stack>
        </HStack>

        <HStack gap={8} mt={16} justify="space-between">
          <Text fontSize="sm">
            Copyright &copy; 2023 All rights reserved designed and developed by{" "}
            <Text as="span" className="text-primary">
              zeeshan.
            </Text>
          </Text>

          <HStack
            gap={4}
            fontWeight={700}
            display={{ base: "none", md: "flex" }}
          >
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
export default Footer;
