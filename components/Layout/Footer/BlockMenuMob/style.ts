import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    display: "none",

    "@media (max-width: 375px)": {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginBottom: 30,
    },
  };
});

export const Link = styled("a")(() => {
  return {
    width: 161,
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

    "@media (max-width: 375px)": {
      fontSize: 14,
    },
  };
});
