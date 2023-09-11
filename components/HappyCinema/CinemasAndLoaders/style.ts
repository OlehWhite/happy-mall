import { styled } from "@mui/material";
import { CircularProgress } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  };
});

export const WrapperBlocks = styled("div")(() => {
  return {
    display: "flex",
    minHeight: 660,
    alignItems: "flex-end",
    zIndex: 15,
  };
});

export const WrapperPlay = styled("div")(() => {
  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -39%)",
    display: "flex",
    border: `2px solid #C9C7C2`,
    height: 72,
    width: 72,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backdropFilter: "blur(5px)",
    cursor: "pointer",
    transition: ".3s",

    "&:hover": {
      border: `2px solid #C6A687`,
    },
  };
});

export const Wrapper = styled("div")(() => {
  return {
    position: "absolute",
    display: "flex",
    zIndex: -5,
  };
});

export const WrapperImg = styled("div")(() => {
  return {
    zIndex: 16,
  };
});

export const Block = styled("div")(() => {
  return {
    padding: 5,
    zIndex: 11,
    borderRadius: "50%",
    cursor: "pointer",
  };
});

export const Logo = styled("img")(() => {
  return {
    width: "100%",
    maxWidth: 1660,
  };
});

export const Img = styled("img")(() => {
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
