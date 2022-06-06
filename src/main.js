import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

function render() {
  ReactDOM.render(
    <ChakraProvider>
      <App></App>
    </ChakraProvider>,
    document.getElementById("app")
  );
}

render();
