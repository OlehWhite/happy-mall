import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  };
});

export const WrapperMap = styled("div")(() => {
  return {
    marginRight: 10,
  };
});

export const Img = styled("img")(() => {
  return {};
});

export const Text = styled("text")(({ theme }) => {
  return {
    color: theme.palette.text.tertiary,
    fontWeight: 500,
  };
});
