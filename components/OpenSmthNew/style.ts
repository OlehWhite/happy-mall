import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    minHeight: 1100,
    width: "100%",
    maxWidth: 1920,
    margin: "0 auto",
    padding: "0 120px",
    boxSizing: "border-box",
    paddingTop: 85,
    marginTop: 55,
  };
});

export const Title = styled("h2")(() => {
  return {
    fontWeight: 500,
    fontSize: 52,
    lineHeight: "60px",
    color: "#FDFCFA",
    margin: "0 0 40px 0",
  };
});

export const Line = styled("hr")(() => {
  return {
    width: 195,
    borderColor: "#C6A687",
    margin: "32px 0 32px 0",
  };
});

export const Background = styled("img")(() => {
  return {
    position: "absolute",
    zIndex: -1,
    maxHeight: 1081,
  };
});