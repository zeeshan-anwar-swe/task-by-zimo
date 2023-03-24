import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../store/store";
import Layout from "../components/layout/Layout";
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}
