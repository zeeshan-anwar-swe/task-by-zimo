import { Box, Container, Heading, HStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import Rating from "react-star-rating-lite";
import { motion } from "framer-motion";

function ProductHero({ product }) {
  const heroBg = useRef(null);

  useEffect(() => {
    const scrollBg = () => {
      let offset = window.pageYOffset;
      heroBg.current.style.backgroundPositionY = offset * 0.4 + "px";
    };

    window.addEventListener("scroll", scrollBg);

    return () => {
      window.removeEventListener("scroll", scrollBg);
    };
  }, []);

  return (
    <div
      className="product-hero"
      style={{
        backgroundImage: `url(${product.thumbnail})`,
      }}
      ref={heroBg}
    >
      <div className="overlay" />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Container position="relative" zIndex={2} textAlign="center">
          <Heading size="lg">{product.title}</Heading>
          <Box mt={4}>
            <Rating readonly value={product.rating.toString()} />
          </Box>
        </Container>
      </motion.div>
    </div>
  );
}
export default ProductHero;
