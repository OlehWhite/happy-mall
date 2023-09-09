import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
  };
});

export const Select = styled("select")(({ theme }) => {
  return {
    backgroundColor: "#ffffff00",
    color: theme.palette.text.primary,
    cursor: "pointer",
    border: 0,
  };
});
