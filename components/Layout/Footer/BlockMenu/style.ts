import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    width: 230,
  };
});

export const Link = styled("a")(() => {
  return {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "20px",
    marginBottom: 18,
    color: "#C9C7C2",
    cursor: "pointer",
    transition: ".3s",

    "&:hover": {
      color: "#AF8B68",
    },
  };
});
