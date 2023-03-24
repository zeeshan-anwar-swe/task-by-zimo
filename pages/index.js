import Head from "next/head";
import Hero from "../components/elements/Hero";
import Intro from "../components/elements/Intro";
import ContactCTA from "../components/elements/ConactCTA";
import AvailableItems from "../components/elements/AvailableItems";
import axios from "axios";
import { Button, Container } from "@chakra-ui/react";
import { BsArrow90DegRight } from "react-icons/bs";
import Link from "next/link";
import { api } from "../lib/constants";

export async function getServerSideProps() {
  const { data: products } = await axios.get(`${api}?limit=3`, {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  });
  return { props: products };
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>task-by-zimo</title>
      </Head>
      <main>
        <Hero />
        <Intro />
        <AvailableItems products={products} />
        <Container>
          <Link href="/products">
            <Button
              w="full"
              className="btn-primary"
              rightIcon={<BsArrow90DegRight />}
            >
              All Products
            </Button>
          </Link>
        </Container>
        <ContactCTA />
      </main>
    </>
  );
}
