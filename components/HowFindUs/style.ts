import { styled } from "@mui/material";
import { theme } from "@/theme";

export const Container = styled("div")(() => {
  return {};
});

export const WrapperImg = styled("div")(() => {
  return {
    position: "absolute",
    display: "flex",
    boxShadow: "inset 0 0px 150px 0px rgba(0,0,0,.7)",
    overflow: "hidden",
    height: 880,
    width: "100%",
  };
});

export const Img = styled("img")(() => {
  return {
    // position: "relative",
    zIndex: "-3",
    width: "100%",
    objectFit: "cover",
  };
});

export const WrapperInfo = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
});

export const Title = styled("h1")(() => {
  return {
    marginTop: 326,
    fontSize: 64,
    fontWeight: 500,
    lineHeight: "115%",
    color: theme.palette.text.primary,
  };
});

export const Button = styled("button")(() => {
  return {
    zIndex: 1,
    width: 166,
    height: 47,
    padding: "12px 28px 14px 28px",
    border: 0,
    fontSize: 16,
    color: theme.palette.text.contrastText,
    cursor: "pointer",
    transition: ".3s",

    "&:hover": {
      backgroundColor: theme.palette.text.hover,
    },
  };
});
