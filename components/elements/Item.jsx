import { Image, Stack, Text, Button, Heading, Box } from "@chakra-ui/react";
import { BsCartPlus } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../store/features/cartSlice";

function Item({ item }) {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box className="card">
        <div className="img-wrapper">
          <Image src={item.thumbnail} alt={item.title} />
        </div>
        <Stack mt="6" spacing="3" className="card-body">
          <Link href={`/products/${item.id}`}>
            <Box className="heading-wrapper">
              <Heading size="lg" className="item-heading">
                {item.title.slice(0, 20)}
              </Heading>
              <div className="overlay-grad" />
            </Box>
            <Text pt={2}>
              {item.description.slice(0, 50)} ...{" "}
              <span className="text-primary" style={{ fontWeight: 600 }}>
                read more
              </span>
            </Text>
            <Text className="text-primary" fontSize="2xl" fontWeight="bold">
              ${item.price}
            </Text>
          </Link>

          <Stack pt={4}>
            <Button
              className="btn-primary"
              leftIcon={<BsCartPlus />}
              onClick={() => {
                dispatch(addItem(item));
              }}
              // disabled={items.includes(item)}
              disabled={Boolean(
                items.find((product) => product.id === item.id)
              )}
            >
              Add to cart
            </Button>
          </Stack>
        </Stack>
      </Box>
    </motion.div>
  );
}
export default Item;
