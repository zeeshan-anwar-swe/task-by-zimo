import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsCartPlus } from "react-icons/bs";
import { motion } from "framer-motion";
import { RiShareForwardFill } from "react-icons/ri";

function Intro() {
  return (
    <Box className="intro" my={32} overflow="hidden">
      <Container maxW={800}>
        <Heading mb={16} textTransform="uppercase">
          Featured <span className="text-primary">ITEMS</span>
        </Heading>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Grid gridTemplateColumns={["1fr", null, "1fr 1fr"]} gap={8}>
            <GridItem>
              <Image src="/assets/store1.jpg" rounded="xl" alt="" />
            </GridItem>
            <GridItem>
              <Heading size="lg">
                Apple <span className="text-primary">Headphones</span>
              </Heading>
              <Text mt={4}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi laboriosam, veniam vel dolorum enim laborum consectetur
                repudiandae fuga tempore odit consequuntur doloremque recusandae
                delectus quam? Animi fuga pariatur officiis rerum officia
                tempore tenetur, rem totam debitis, temporibus eum amet nihil.
              </Text>
              <Heading size="md" className="text-primary" my={2}>
                $ 50.00
              </Heading>

              <HStack mt={6} gap={4}>
                <Button className="btn-primary" leftIcon={<BsCartPlus />}>
                  Add to cart
                </Button>
                <Button variant="" title="share">
                  <RiShareForwardFill />
                </Button>
              </HStack>
            </GridItem>
          </Grid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Grid gridTemplateColumns={["1fr", null, "1fr 1fr"]} gap={8} mt={16}>
            <GridItem order={{ base: 0, md: 1 }}>
              <Image src="/assets/store2.jpg" rounded="xl" alt="" />
            </GridItem>
            <GridItem order={{ base: 1, md: 0 }}>
              <Heading size="lg">
                Rollex <span className="text-primary">Watch</span>
              </Heading>
              <Text mt={4}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi laboriosam, veniam vel dolorum enim laborum consectetur
                repudiandae fuga tempore odit consequuntur doloremque recusandae
                delectus quam? Animi fuga pariatur officiis rerum officia
                tempore tenetur, rem totam debitis, temporibus eum amet nihil.
              </Text>
              <Heading size="md" className="text-primary" my={2}>
                $ 80.00
              </Heading>

              <HStack mt={6} gap={4}>
                <Button className="btn-primary" leftIcon={<BsCartPlus />}>
                  Add to cart
                </Button>
                <Button variant="" title="share">
                  <RiShareForwardFill />
                </Button>
              </HStack>
            </GridItem>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
export default Intro;
