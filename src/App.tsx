import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/Default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hellor Word</h1>3
      <GlobalStyle/>
    </ThemeProvider>
  );
}
