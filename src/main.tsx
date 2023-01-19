import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const customTheme = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1350px",
  fonts: {
    heading: "Open Sans",
    body: "Open Sans",
  },
};

const theme = extendTheme({
  customTheme,
  components: {
    Button: {
      variants: {
        bagsNormal: {
          backgroundColor: "#020202",
          color: "#ffffff",
        },
        bagsDesktop: {
          backgroundColor: "#0051fe",
          color: "#ffffff",
        },
      },
    },
  },
});

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
