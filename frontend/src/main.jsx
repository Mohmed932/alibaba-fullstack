import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Theme from "./components/Theme.js";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={Theme} >
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
