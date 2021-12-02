import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, theme, CSSReset } from "@chakra-ui/react";

import App from "./App";
theme.config.initialColorMode = "light";

console.log(theme);
console.log(CSSReset)
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
