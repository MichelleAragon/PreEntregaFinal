import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ShopingCartContextProvider } from "./hooks/ShopingCartContext.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#080b53",
    },
    secondary: {
      main: "#ea2088",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ShopingCartContextProvider>
        <App />
      </ShopingCartContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
