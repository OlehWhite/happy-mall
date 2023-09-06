import { styled } from "@mui/material";

export const HeaderBlock = styled("header")(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    height: 72,
    width: "100%",
    maxWidth: 1440,
    margin: "0 auto",
  };
});
