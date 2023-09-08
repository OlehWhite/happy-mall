import { styled } from "@mui/material";
import { theme } from "@/theme";

export const Container = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    width: 193,
    marginLeft: 95,
  };
});

export const Link = styled("a")(() => {
  return {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "20px",
    marginBottom: 18,
    color: theme.palette.primary.contrastText,
    cursor: "pointer",
    transition: ".3s",

    "&:hover": {
      color: theme.palette.text.hover,
    },
  };
});
