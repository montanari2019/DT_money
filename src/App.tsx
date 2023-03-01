import { ThemeProvider } from "styled-components";
import { TransactionsProvider } from "./context/Transactions";
import { Transations } from "./pages/Transations/Transations";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/Default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transations />
      </TransactionsProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
