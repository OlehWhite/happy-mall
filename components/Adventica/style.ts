import { styled } from "@mui/material";
import Slider from "react-slick";

export const Container = styled("div")(() => {
  return {
    position: "relative",
    maxWidth: 1920,
    width: "100%",
    padding: "0 120px",
    boxSizing: "border-box",
    margin: "0 auto",
  };
});

export const WrapperBackground = styled("div")(() => {
  return {};
});

export const Background = styled("img")(() => {
  return {
    position: "absolute",
    top: -371,
    zIndex: -1,
  };
});

export const WrapperLogo = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 140,
  };
});

export const Logo = styled("img")(() => {
  return {};
});

export const Title = styled("p")(() => {
  return {
    margin: "20px 0 0 0",
    fontSize: 22,
    fontWeight: 500,
    color: "#FDFCFA",
  };
});

export const Wrapper = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    margin: "25px 0 0 0",
  };
});

export const Img = styled("img")(() => {
  return {
    border: "none",
    outline: "none",
  };
});

export const Menu = styled("button")(({ active }: { active: boolean }) => {
  return {
    margin: "0 16px",
    fontSize: 14,
    fontWeight: 400,
    color: active ? "#C6A687" : "#FDFCFA",
    backgroundColor: "#ffffff00",
    border: 0,
    borderBottom: `2px solid ${active ? "#C6A687" : "#ffffff00"}`,
    cursor: "pointer",
    transition: ".3s",
    paddingBottom: 20,

    "&:hover": {
      color: "#AF8B68",
      borderBottom: "2px solid #C6A687",
    },
  };
});

export const WrapperImage = styled("div")(() => {
  return {};
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
    left: "16%",
    top: "52%",
    transform: "translateY(-50%)",
    zIndex: 10,
    cursor: "pointer",
  };
});

export const WrapperRight = styled("div")(() => {
  return {
    position: "absolute",
    right: "16%",
    top: "52%",
    transform: "translateY(-50%)",
    zIndex: 10,
    cursor: "pointer",
  };
});

export const WrapperInfoBlock = styled("div")(() => {
  return {
    position: "relative",
    width: "100%",
    maxWidth: 571,
    backgroundColor: "#FDFCFA",
    margin: "0 auto",
    bottom: 149,
  };
});

export const TitleInfo = styled("p")(() => {
  return {
    fontSize: 22,
    fontWeight: 500,
    color: "#1E1E21",
    margin: 0,
    padding: "24px 0 12px 24px",
  };
});

export const Line = styled("hr")(() => {
  return {
    border: "1px solid",
    width: 195,
    display: "flex",
    margin: "0 0 20px 24px",
    borderColor: "#C6A687",
    backgroundColor: "#C6A687",
  };
});

export const Text = styled("p")(() => {
  return {
    fontSize: 16,
    fontWeight: 400,
    color: "#494843",
    padding: "0 0 24px 24px",
  };
});
