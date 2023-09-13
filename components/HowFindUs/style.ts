import { CircularProgress, styled } from "@mui/material";
import Link from "next/link";

export const Container = styled("div")(() => {
  return {};
});

export const Img = styled("img")(() => {
  return {
    zIndex: -3,
    width: "100%",
    objectFit: "cover",
  };
});

export const WrapperInfo = styled("div")(() => {
  return {
    position: "absolute",
    top: 0,
    width: "100%",
    boxShadow: "inset 0 0px 150px 0px rgba(0,0,0,.7)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 112,
  };
});

export const Title = styled("h1")(() => {
  return {
    marginTop: 326,
    fontSize: 64,
    fontWeight: 500,
    lineHeight: "115%",
    color: "#FDFCFA",
  };
});

export const Button = styled(Link)(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    width: 166,
    height: 47,
    border: 0,
    fontSize: 16,
    color: "#1E1E21",
    cursor: "pointer",
    transition: ".3s",
    textDecoration: "none",
    backgroundColor: "#FDFCFA",

    "&:hover": {
      backgroundColor: "#AF8B68",
    },
  };
});

export const Wrapper = styled("div")(() => {
  return {
    display: "flex",
    marginTop: 375,
    marginLeft: 29,
  };
});

export const Block = styled("div")(() => {
  return {
    padding: 5,
    zIndex: 1,
    borderRadius: "50%",
    cursor: "pointer",
  };
});

export const ImgLoad = styled("img")(() => {
  return {
    position: "relative",
    bottom: 7,
    right: 19,
    width: 12,
  };
});

export const Circular = styled(CircularProgress)(() => {
  return {
    color: "#C6A687",
    "& .MuiCircularProgress-svg": {
      transform: "scale(1.5)",
    },
  };
});
