import React from "react";
import { ThemeProvider } from "styled-components";

import App from "src/App";

import theme from "src/configs/theme";
import { TableProvider } from "./Context/TableProvider";

const Root: React.FC = () => (
  <ThemeProvider theme={theme}>
    <TableProvider>
      <App />
    </TableProvider>
  </ThemeProvider>
);

export default Root;
