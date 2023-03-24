import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsCartPlus } from "react-icons/bs";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../store/features/cartSlice";
// change the blue color to red from source code
import "react-image-gallery/styles/scss/image-gallery.scss";

function PInfo({ product }) {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const images = product.images.map((img) => {
    return { original: img, thumbnail: img };
  });

  return (
    <Container my={8} maxW={1200} as="article">
      <Grid my={8} gridTemplateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={4}>
        <GridItem>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* <Image src={product.thumbnail} alt={product.title} rounded="xl" /> */}
            <ImageGallery items={images} />
          </motion.div>
        </GridItem>

        <GridItem>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Stack px={{ base: 2, md: 8 }} gap={3}>
              <Heading as="h2">{product.title}</Heading>
              <Text as="p">{product.description}</Text>
              <Box>
                <Badge colorScheme="green" mx={2} rounded="lg">
                  {product.category}
                </Badge>
                <Badge colorScheme="green" mx={2} rounded="lg">
                  {product.brand}
                </Badge>
              </Box>
              <Heading size="lg">
                $<span className="text-primary">{product.price}</span>
              </Heading>

              <HStack justify="space-between">
                <Button
                  className="btn-primary"
                  leftIcon={<BsCartPlus />}
                  onClick={() => dispatch(addItem(product))}
                  disabled={Boolean(
                    items.find((item) => item.id === product.id)
                  )}
                >
                  Add to cart
                </Button>
                <Text color="green.400">IN STOCK: {product.stock}</Text>
              </HStack>
              <Text as="small">
                Average ratings:{" "}
                <Text
                  as="span"
                  color={product.rating < 3 ? "yellow.300" : "green.300"}
                >
                  {product.rating}
                </Text>
              </Text>
            </Stack>
          </motion.div>
        </GridItem>
      </Grid>
    </Container>
  );
}
export default PInfo;
