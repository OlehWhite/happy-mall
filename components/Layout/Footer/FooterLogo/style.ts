import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "flex-start",
    height: 50,
  };
});

export const LogoImg = styled("img")(() => {
  return {
    display: "flex",
    width: 131,
    cursor: "pointer",
  };
});
