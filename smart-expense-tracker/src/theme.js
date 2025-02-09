import { createTheme } from "@mui/material/styles";

const theme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

export default theme;
