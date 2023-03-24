import { Box, Container } from "@chakra-ui/react";
import AvailableItems from "../../components/elements/AvailableItems";
import Back from "../../components/utils/Back";
import axios from "axios";
import Pagination from "../../components/elements/Pagination";
import { api, limit } from "../../lib/constants";
import Head from "next/head";

export async function getServerSideProps({ query }) {
  if (query.page) {
    const skip = (parseInt(query.page) - 1) * 10;
    const { data: products } = await axios.get(
      `${api}?limit=${limit}&skip=${skip}`,
      { headers: { "Accept-Encoding": "gzip,deflate,compress" } }
    );
    return { props: products };
  }

  const { data: products } = await axios.get(`${api}?limit=${limit}`, {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  });
  return { props: products };
}

export default function ProductPage(props) {
  const total = parseInt(props.total) / limit;
  return (
    <>
      <Head>
        <title>Cart - products</title>
      </Head>
      <Container maxW={1200} overflowY="hidden">
        <Box mt={40}>
          <Back to="/" text="Home" />
        </Box>
        <AvailableItems products={props.products} />
        <Pagination total={total} />
      </Container>
    </>
  );
}
