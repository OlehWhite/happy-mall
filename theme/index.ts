import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1E1E21",
      light: "#494843",
      dark: "#1E1E21",
      contrastText: "#C9C7C2",
    },
    // secondary: {
    //   main: "",
    //   light: "",
    //   dark: "",
    //   contrastText: "",
    // },
    text: {
      primary: "#FDFCFA",
      secondary: "#C9C7C2",
      tertiary: "#C6A687",
      contrastText: "rgba(30, 30, 33, 1)",
      hover: "rgba(175, 139, 104, 1)",
    },
    // background: {
    //   paper: "",
    //   default: "",
    // },
    // success: {
    //   main: "",
    //   light: "",
    //   dark: "",
    // },
    // error: {
    //   main: "",
    // },
  },
});
