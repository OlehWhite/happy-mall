import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    width: 230,
  };
});

export const Link = styled("a")(({ theme }) => {
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
