import { styled } from "@mui/material";
import { theme } from "@/theme";

export const Container = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
  };
});

export const Select = styled("select")(() => {
  return {
    backgroundColor: "#ffffff00",
    color: theme.palette.text.primary,
    cursor: "pointer",
    border: 0,
  };
});

export const Option = styled("option")(() => {
  return {};
});
