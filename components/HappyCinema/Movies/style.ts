import { styled } from "@mui/material";
import Slider from "react-slick";

export const Container = styled("div")(() => {
  return {
    position: "relative",
  };
});

export const WrapperSlider = styled("div")(() => {
  return {
    marginTop: 55,
  };
});

export const ButtonLeft = styled("div")(() => {
  return {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #C9C7C2",
    width: 48,
    height: 48,
    backdropFilter: "blur(5px)",
    left: -60,
    transition: ".3s",

    "&:hover": {
      backgroundColor: "#AF8B68",
    },
  };
});

export const ButtonRight = styled("div")(() => {
  return {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #C9C7C2",
    width: 48,
    height: 48,
    backdropFilter: "blur(5px)",
    right: -60,
    transition: ".3s",

    "&:hover": {
      backgroundColor: "#AF8B68",
    },
  };
});

export const WrapperLeft = styled("div")(() => {
  return {
    position: "absolute",
    left: "2%",
    top: "55%",
    transform: "translateY(-50%)",
    zIndex: 10,
    cursor: "pointer",

    "@media (max-width: 375px)": {
      display: "none",
    },
  };
});

export const WrapperRight = styled("div")(() => {
  return {
    position: "absolute",
    right: "2%",
    top: "55%",
    transform: "translateY(-50%)",
    zIndex: 10,
    cursor: "pointer",

    "@media (max-width: 375px)": {
      display: "none",
    },
  };
});

export const Img = styled("img")(() => {
  return {};
});

export const Movie = styled("div")(() => {
  return {
    cursor: "pointer",
  };
});

export const LogoMovie = styled("img")(() => {
  return {};
});

export const CustomSlider = styled(Slider)(() => {
  return {
    "@media (max-width: 375px)": {
      "& img": {
        maxWidth: 375,
        height: 215,
      },
    },
  };
});
