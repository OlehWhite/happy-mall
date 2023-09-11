import { styled } from "@mui/material";

export const HeaderBlock = styled("header")(() => {
  return {
    position: "fixed",
    backgroundColor: "#1E1E21",
    display: "flex",
    justifyContent: "space-between",
    height: 72,
    width: "100%",
    maxWidth: 1920,
    margin: "0 auto",
    padding: "0 32px",
    boxSizing: "border-box",
    zIndex: 100,
  };
});
