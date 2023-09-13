import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
    height: 72,
    marginRight: 100,
  };
});

export const LogoImg = styled("img")(() => {
  return {
    display: "flex",
    width: 84,
    height: 14,
    cursor: "pointer",
  };
});
