import { Box, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/features/cartSlice";
import { AnimatePresence, motion } from "framer-motion";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 200, scale: 0.5 }}
      >
        <Stack className="cart-item" direction="row" alignItems="center">
          <Box>
            <Image
              src={item.thumbnail}
              height={40}
              width={50}
              alt={item.title}
            />
          </Box>
          <Stack gap={0}>
            <Text as="small">{item.title}</Text>
            <Text className="text-primary" fontWeight={900}>
              ${item.price}
            </Text>
          </Stack>
          <div
            className="del"
            onClick={() => {
              dispatch(removeItem(item.id));
            }}
          >
            <AiOutlineDelete />
          </div>
        </Stack>
      </motion.div>
    </AnimatePresence>
  );
}
export default CartItem;
