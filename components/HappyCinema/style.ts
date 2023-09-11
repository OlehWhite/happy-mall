import { styled } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    maxWidth: 1920,
    padding: "0 120px 0 120px",
    boxSizing: "border-box",
    margin: "0 auto",
    marginTop: 140,
  };
});

export const WrapperLogo = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 40,
  };
});

export const Logo = styled("img")(() => {
  return {};
});

export const Title = styled("h2")(() => {
  return {
    margin: "8px 0 0 0",
    fontSize: 22,
    fontWeight: 500,
    color: "#FDFCFA",
  };
});

export const WrapperLink = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    marginTop: 58,
    cursor: "pointer",
  };
});

export const Link = styled("div")(() => {
  return {
    fontSize: 16,
    fontWeight: 500,
    color: "#C6A687",
    margin: "5px 0 0 12px",
  };
});

export const Img = styled("img")(() => {
  return {};
});
