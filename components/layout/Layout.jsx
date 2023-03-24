import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "react-scroll-to-top";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadItems } from "../../store/features/cartSlice";
import "react-toastify/dist/ReactToastify.css";

function Layout({ children }) {
  const dispatch = useDispatch();
  // load cart items from local storeage
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart"));
    if (items && items.length) {
      dispatch(loadItems(items));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Next.js application with dummy json API"
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="keywords" content="ecommerce, fake-store, next-ecommerce" />
      </Head>

      <Navbar />
      <ScrollToTop
        viewBox="0 0 256 256"
        smooth
        height="20px"
        color="#fff"
        style={{ backgroundColor: "#279847" }}
      />
      <NextNProgress color="#279847" height={5} />
      <ToastContainer position="bottom-right" theme="dark" />
      {children}
      <Footer />
    </>
  );
}
export default Layout;
