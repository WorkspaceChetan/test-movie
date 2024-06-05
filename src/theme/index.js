import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#B7B5B9",
      secondary: "#E9E8EB",
      disabled: "#58535E",
    },
    primary: {
      main: "#FF48B3",
      100: "#D12288",
      200: "#290F1E",
      300: "#FF0000",
      400: "#FF68C0",
      500: "#611441",
      600: "#FFE500",
      700: "#232027",
      800: "#D12288",
      900: "#E92F2F",
    },
    error: {
      main: "#FF2525",
      300: "#FF5959",
    },
    success: {
      main: "#079C46",
      100: "#79E028",
    },
    secondary: {
      main: "#290F1E",
      light: "#58535E",
      dark: "#1E0815",
      100: "#EEEEEE",
      200: "#B7B5B9",
      300: "#DDDDDD",
      400: "#79E02852",
      500: "#100B19",
      600: "#B7B5B952",
      700: "#86838A",
      800: "#07030E",
      900: "#D4D3D63D",
    },
    common: {
      white: "#fff",
      black: "#000",
    },
    background: {
      paper: "#000",
      default: "#000",
    },
    warning: {
      main: "#A98F00",
      light: "#ECC700",
      300: "rgba(254, 168, 50, 0.3)",
    },
    info: {
      main: "#57ADDD",
      300: "rgba(87, 173, 221, 0.3)",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export default theme;
