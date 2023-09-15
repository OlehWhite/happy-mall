import { styled } from "@mui/material";
import Link from "next/link";

export const Ul = styled("ul")(() => {
  return {
    display: "flex",
    alignItems: "center",

    "@media (max-width: 375px)": {
      display: "none",
    },
  };
});

export const Li = styled("li")(({ theme }) => {
  return {
    listStyleType: "none",
    marginRight: 20,
    fontSize: 16,
    lineHeight: "16px",
    letterSpacing: "1%",
    color: "#FDFCFA",
    cursor: "pointer",
    transition: ".3s",

    "&:hover": {
      color: "#C6A687",
    },
  };
});

export const Wrapper = styled("div")(() => {
  return {
    display: "none",

    "@media (max-width: 375px)": {
      display: "inline-block",
    },
  };
});

export const Img = styled("img")(() => {
  return {
    cursor: "pointer",
    marginTop: 26,
    width: 17,
    height: 19,
  };
});

export const Menu = styled("div")(({ active }: { active: boolean }) => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 150,
    position: "absolute",
    width: 375,
    left: 0,
    height: "100vh",
    backgroundColor: "#1E1E21",
    transition: ".8s",
    transform: active ? "translateX(-375px)" : "translateX(0px)",
  };
});

export const Button = styled("button")(() => {
  return {
    cursor: "pointer",
    backgroundColor: "#ffffff00",
    border: 0,
    color: "white",
    paddingLeft: 24,
  };
});

export const Open = styled("span")(() => {
  return {
    fontSize: 25,
  };
});

export const Close = styled("span")(() => {
  return {
    fontSize: 22,
  };
});

export const CustomLink = styled(Link)(() => {
  return {
    textDecoration: "none",
    color: "#FDFCFA",
    fontFamily: "Ordina-Regular",
    fontWeight: 500,
    fontSize: 24,
    marginBottom: 20,
    cursor: "pointer",
    transition: ".3s",

    "&:hover": {
      color: "#AF8B68",
    },
  };
});

export const WrapperAnimation = styled("div")(() => {
  return {
    marginTop: 50,
  };
});

export const Languages = styled("div")(() => {
  return {
    marginTop: 170,
  };
});

export const ButtonLanguage = styled("button")(() => {
  return {
    cursor: "pointer",
    backgroundColor: "#ffffff00",
    border: 0,
    color: "#C9C7C2",
    fontSize: 16,
    fontFamily: "Ordina-Regular",
    fontWeight: 500,
    transition: ".3s",

    "&:hover": {
      color: "#AF8B68",
    },
  };
});
