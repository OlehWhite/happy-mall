import { styled } from "@mui/material";
import { CircularProgress } from "@mui/material";

export const Container = styled("div")(() => {
  return {
    display: "flex",
    marginTop: 336,
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
