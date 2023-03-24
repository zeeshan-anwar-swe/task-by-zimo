import { Box, Container } from "@chakra-ui/react";
import Back from "../../components/utils/Back";
import axios from "axios";
import { api } from "../../lib/constants";
import Head from "next/head";
import PInfo from "../../components/elements/PInfo";
import ProductHero from "../../components/elements/ProductHero";

export async function getServerSideProps(context) {
  const { data: product } = await axios.get(`${api}/${context.params.id}`, {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  });
  return { props: product };
}

export default function ProductPage(product) {
  return (
    <>
      {/* seo */}
      <Head>
        <title>Next Cart - {product.title}</title>
        <meta name="description" content={product.description} />
        <meta name="title" content={product.title} />
        <meta
          name="keywords"
          content={`ecommerce, fake-store, next-ecommerce, ${product.category}, ${product.brand}`}
        />
        {/* face book */}
        <meta property="og:title" content={product.title} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={product.thumbnail} />
        {/* twitter */}
        <meta name="twitter:title" content={product.title} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.thumbnail} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ProductHero product={product} />
      <Container maxW={1200}>
        <Box mt={12}>
          <Back to="/products" text="Back" />
        </Box>
        <PInfo product={product} />
      </Container>
    </>
  );
}
