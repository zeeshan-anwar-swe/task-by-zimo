import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const { items, total } = useSelector((state) => state.cart);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        ref={btnRef}
        variant="solid"
        colorScheme="whiteAlpha"
        onClick={onOpen}
        leftIcon={<AiOutlineShoppingCart />}
      >
        Cart
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="cart-content-wrapper">
          <DrawerCloseButton />
          <DrawerHeader>Selected items</DrawerHeader>

          <DrawerBody>
            {items.length === 0 ? (
              <Heading size="md">No Items in cart</Heading>
            ) : (
              items.map((item) => <CartItem item={item} key={item.id} />)
            )}
          </DrawerBody>

          <DrawerFooter justifyContent="space-between">
            <Heading size="md">Total:</Heading>
            <Heading size="md">${total}</Heading>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
