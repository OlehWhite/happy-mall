import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
  };
});

export const Select = styled("select")(() => {
  return {
    backgroundColor: "#ffffff00",
    color: "#FDFCFA",
    cursor: "pointer",
    border: 0,
  };
});
